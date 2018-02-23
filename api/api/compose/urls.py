from django.urls import path

from . import views

urlpatterns = [
    path('v1/snapshot/<int:id>/', views.index),
]