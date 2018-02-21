from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from api.compose.client import ClientAPI
from api.compose.conf import ComposeAppConf

# Create your views here.
@api_view(['GET'])
def index(request, id):
    conf = ComposeAppConf()
    content = ClientAPI.request(request, conf.URL_SNAPSHOT)
    return Response(content)