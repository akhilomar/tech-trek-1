from rest_framework import generics, views
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from questions.models import Question
from accounts.models import UserProfile

from questions.api.serializers import (
    QuestionDetailSerializer,
    QuestionSerializer
)

class GetQuestion(views.APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        try:
            u = request.user
            player = u.profile
        except UserProfile.DoesNotExist:
            return Response({"error": "userprofile does not exist"})
        question = Question.objects.get(level=player.current_question)
        # TODO: edit serializer to remove the answer field.
        serializer = QuestionDetailSerializer(question)
        return Response(serializer.data)

class SubmitQuestion(views.APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        try:
            u = request.user
            player = u.profile
        except UserProfile.DoesNotExist:
            return Response({"error": "userprofile does not exist"})
        print("{} entered answer {}".format(u.username, request.data['answer']))
        
        # TODO: Add utility function
        question = Question.objects.get(level=player.current_question)
        if (request.data['answer'] == question.answer):
            player.current_question = player.current_question + 1
            player.save()

            # TODO: Update Leaderboard
            is_correct = True
        else:
            is_correct = False
        return Response({"success": is_correct})

class QuestionListCreateAPIView(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    permission_classes = [IsAdminUser]

class QuestionEditAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    
    permission_classes = [IsAdminUser]
