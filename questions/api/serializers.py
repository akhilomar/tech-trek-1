from rest_framework import serializers
from questions.models import Question

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class GetQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = [
            'question',
        ]

class LeaderboardSerializer(serializers.BaseSerializer):
    def to_representation(self, obj):
        return {
            'player_name': obj.username,
            'score': obj.score,
        }
