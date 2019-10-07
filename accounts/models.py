from django.db import models
from django.contrib.auth.models import AbstractUser, User
from django.utils import timezone

class Player(AbstractUser):
    is_paid = models.BooleanField(default=False)
    last_solved = models.DateTimeField(default=timezone.now)
    unlock_time = models.DateTimeField(default=timezone.now)
    current_question = models.IntegerField(default=1)
    score = models.IntegerField(default=0)
    avatar = models.ImageField(default="1.png")
    avatar_no = models.PositiveIntegerField(default=1)

    def __str__(self):
        return self.username
