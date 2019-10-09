from rest_framework import generics, views
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
from rest_framework.decorators import api_view
from utils.permissions import IsPaid
from questions.models import Question
from accounts.models import Player
from datetime import datetime

from questions.api.serializers import (
    GetQuestionSerializer,
    QuestionSerializer,
    LeaderboardSerializer,
)

class GetQuestion(views.APIView):
    permission_classes = [IsAuthenticated, IsPaid]

    def get(self, request, format=None):
        player = request.user
        self.check_object_permissions(request, player)
        
        tz_info = player.unlock_time.tzinfo
        time_left = (player.unlock_time - datetime.now(tz_info)).total_seconds()
        print(time_left)
        if time_left >= 0:
            return Response({
                "isTimeLeft": True,
                "detail": {
                    "question": "",
                    "time_left": time_left,
                }
            })
        
        # TODO: add utility function for fetching question.
        q = Question.objects.get(level=player.current_question)
        return Response({
                "isTimeLeft": False,
                "detail": {
                    "question": q.question,
                    "time_left": 0,
                }
            })

        # if serializer.is_valid():
        
        # return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

    def post(self, request, format=None):
        player = request.user
        self.check_object_permissions(request, player)

        tz_info = player.unlock_time.tzinfo
        time_left = (player.unlock_time - datetime.now(tz_info)).total_seconds()

        if time_left >= 0:
            return Response({
                "isTimeLeft": True,
                "detail": {
                    "question": "",
                    "time_left": time_left,
                }
            })
        
        question = Question.objects.get(level=player.current_question)

        if request.data['answer'].lower() == question.tech_answer:
            player.current_question = player.current_question + 1
            player.score = player.score + 10
            player.unlock_time = datetime.now() + question.wait_duration
            player.last_solved = datetime.now()
            player.save()
            is_correct = True

        if request.data['answer'].lower() == question.nontech_answer:
            player.current_question = player.current_question + 1
            player.score = player.score + 5
            player.unlock_time = datetime.now() + question.wait_duration
            player.last_solved = datetime.now()
            player.save()

            is_correct = True
        else:
            is_correct = False

        return Response({"success": is_correct})

@api_view(['GET'])
def leaderboard(request):
    """
        Returns a list of players with highest score. The tie is broken
        by the player who has solved first.
    """

    queryset = Player.objects.order_by("-score", "last_solved")\
        .filter(is_superuser=False, is_paid=True)
    serializer = LeaderboardSerializer(queryset, many=True)

    return Response(serializer.data)
