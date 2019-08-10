from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='profile'
    )
    payment_done = models.BooleanField(default=False)
    last_solved = models.DateTimeField(auto_now_add=True)
    current_question = models.IntegerField(default=1)

    def __str__(self):
        return self.user.username
