from django.db import models
from django.contrib.auth.models import AbstractUser, User
from datetime import datetime

class Player(AbstractUser):
    is_paid = models.BooleanField(default=False)
    last_solved = models.DateTimeField(default=datetime.now)
    unlock_time = models.DateTimeField(default=datetime.now)
    current_question = models.IntegerField(default=1)
    score = models.IntegerField(default=0)
    
    def __str__(self):
        return self.username
