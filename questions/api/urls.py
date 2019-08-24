from django.urls import path

from questions.api.views import (
    Play
)

urlpatterns = [
    path('', Play.as_view(), name='play'),
]
