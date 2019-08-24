from rest_framework import views
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from questions.models import Question

from questions.api.serializers import (
    QuestionDetailSerializer,
)

class Play(views.APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        u = request.user
        player = u.profile
        question = Question.objects.get(level=player.current_question)
        serializer = QuestionDetailSerializer(question)
        return Response(serializer.data)
