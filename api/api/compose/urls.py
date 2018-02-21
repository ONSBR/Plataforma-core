from django.urls import path

from . import views

urlpatterns = [
    path('snapshot/<int:id>/', views.index),
]