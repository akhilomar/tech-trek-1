from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token

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

@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

@receiver(post_save, sender=User)
def create_superuser_profile(sender, instance, created, **kwargs):
    if created and instance.is_superuser:
        UserProfile.objects.create(
            user=instance,
            payment_done=True
        )
