from rest_framework import serializers
from .models import Hotel


class HotelListingSerializer(serializers.ModelSerializer):
    """
    Serializer for converting the model object to json and vice versa and for validation
    """

    class Meta:
        model = Hotel
        fields = ('id', 'name', 'host_name', 'neighbourhood_group', 'neighbourhood', 'latitude', 'longitude',
                  'room_type', 'price')
