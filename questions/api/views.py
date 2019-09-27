from rest_framework import generics, views
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from questions.models import Question
# from accounts.models import UserProfile

from questions.api.serializers import (
    GetQuestionSerializer,
    QuestionSerializer
)

class GetQuestion(views.APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        player = request.user
        # TODO: add utility function for fetching question.
        question = Question.objects.get(level=player.current_question)
        serializer = GetQuestionSerializer(question)
        return Response(serializer.data)

    def post(self, request, format=None):
        player = request.user
        question = Question.objects.get(level=player.current_question)
        if request.data['answer'] == question.tech_answer:
            player.current_question = player.current_question + 1
            player.save()
            is_correct = True
        else:
            is_correct = False
        return Response({"success": is_correct})


# class QuestionListCreateAPIView(generics.ListCreateAPIView):
#     queryset = Question.objects.all()
#     serializer_class = QuestionSerializer

#     permission_classes = [IsAdminUser]

# class QuestionEditAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Question.objects.all()
#     serializer_class = QuestionSerializer
    
#     permission_classes = [IsAdminUser]
