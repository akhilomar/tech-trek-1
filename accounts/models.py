from django.db import models
from django.contrib.auth.models import AbstractUser, User

class Player(AbstractUser):
    is_paid = models.BooleanField(default=False)
    last_solved = models.DateTimeField(auto_now_add=True)
    current_question = models.IntegerField(default=1)
    score = models.IntegerField(default=0)
    
    def __str__(self):
        return self.username
