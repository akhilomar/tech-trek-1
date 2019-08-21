from django.db import models

class Question(models.Model):
    question = models.CharField(max_length=200)
    answer = models.CharField(max_length=50)
    level = models.IntegerField(blank=True)
    wait_time = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.question
