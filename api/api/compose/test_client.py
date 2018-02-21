import os
import unittest

from unittest.mock import patch
from urllib.parse import urlparse
from api.compose.client import ClientAPI

def fake_urlopen(url):
    parsed_url = urlparse(url)
    resource_file = os.path.normpath(
        f'{os.getcwd()}\\api\\compose\\tests\\resources{parsed_url.path}'
    )
    return open(resource_file, mode='rb')

class ClientAPITest(unittest.TestCase):

    def setUp(self):
        self.patcher = patch('api.compose.client.urlopen', fake_urlopen)
        self.patcher.start()

    def tearDown(self):
        self.patcher.stop()

    def test_request(self):
        response = ClientAPI.request(self, '/test_user')
        self.assertTrue(response['id'] == 161046)