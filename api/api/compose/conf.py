from django.conf import settings
from appconf import AppConf

class ComposeAppConf(AppConf):
    URL_SNAPSHOT = 'http://localhost:9110/core/installedApp'