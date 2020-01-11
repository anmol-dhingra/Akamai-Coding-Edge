from django.db import models

# Create your models here.


class Hotel(models.Model):
    name = models.TextField()
    host_name = models.TextField()
    neighbourhood_group = models.TextField()
    neighbourhood = models.TextField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    room_type = models.TextField()
    price = models.IntegerField()
