from rest_framework import serializers
from questions.models import Question

class QuestionListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = [
            'level',
            'question',
            'answer',
            'level',
        ]

class QuestionDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = [
            'question',
            'answer',
        ]

class QuestionUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class QuestionCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'
