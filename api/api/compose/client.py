import json
from urllib.request import urlopen
    

class ClientAPI(object):
    def request(self, url):
        with urlopen(url) as response:
            html = response.read()

        return json.loads(html)