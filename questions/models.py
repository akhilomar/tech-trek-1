from django.db import models
from datetime import timedelta

class Question(models.Model):
    question = models.CharField(max_length=200)
    tech_answer = models.CharField(max_length=100)
    nontech_answer = models.CharField(max_length=100)
    level = models.IntegerField(default=1)
    wait_duration = models.DurationField(default=timedelta(seconds=13))

    def __str__(self):
        return self.question
