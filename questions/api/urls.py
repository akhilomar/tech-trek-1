from django.urls import path

from questions.api.views import (
    GetQuestion,
    SubmitQuestion
)

urlpatterns = [
    path('', GetQuestion.as_view(), name='play'),
    path('submit/', SubmitQuestion.as_view(), name='submit')
]
