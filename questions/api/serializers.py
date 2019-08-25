from rest_framework import serializers
from questions.models import Question

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class QuestionDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = [
            'question',
            'answer',
        ]
