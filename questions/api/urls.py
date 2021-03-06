from django.urls import path

from questions.api.views import (
    GetQuestion,
    leaderboard,
    # QuestionListCreateAPIView,
    # QuestionEditAPIView
)

urlpatterns = [
    path('', GetQuestion.as_view(), name='play'),
    path('leaderboard/', leaderboard, name='leaderboard')
    # path('submit/', SubmitQuestion.as_view(), name='submit'),
    # path('manage/', QuestionListCreateAPIView.as_view(), name='list'),
    # path('manage/<int:pk>/', QuestionEditAPIView.as_view(), name='manage'),
]
