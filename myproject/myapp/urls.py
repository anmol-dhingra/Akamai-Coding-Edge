from django.urls import path

from . import views

urlpatterns = [
    path('hotels', views.HotelList.as_view()),
    path('hotels/<int:pk>', views.HotelListDetail.as_view()),
]
