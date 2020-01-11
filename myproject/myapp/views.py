from django.contrib import auth
from django.contrib.auth.models import User
from django.http import HttpResponse

# Create your views here.
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.utils import json

from .models import Hotel
from .serializers import HotelListingSerializer


class HotelList(generics.ListCreateAPIView):
    """
    View for Listing all hotels and creation of a Hotel
    """
    queryset = Hotel.objects.all()
    serializer_class = HotelListingSerializer


class HotelListDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    View for Getting a detail of one hotel, update and delete the hotel
    """
    serializer_class = HotelListingSerializer

    def get_queryset(self, **kwargs):

        query_set = Hotel.objects.filter(id=self.kwargs['pk'])
        return query_set
