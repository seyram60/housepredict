from django.db import models

# Create your models here.
class House(models.Model):
    reference = models.CharField(max_length=30)
    price = models.IntegerField()
    surface = models.IntegerField()
    location = models.CharField(max_length=200)
    type = models.CharField(max_length=100)
