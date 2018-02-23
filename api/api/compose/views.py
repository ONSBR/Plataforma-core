from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView

from api.compose.client import ClientAPI
from api.compose.conf import ComposeAppConf


# Create your views here.
@api_view(['GET'])
def index(request, id):
    conf = ComposeAppConf()
    content = ClientAPI.request(request, settings.URL_SNAPSHOT)
    return Response(content)