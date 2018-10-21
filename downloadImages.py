import urllib.request
import shutil

#from PIL import Image


url = 'https://static.zara.net/photos///2018/I/0/2/p'

req = urllib.request.Request(
    url,
    data=None,
    headers={
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
    })

f = urllib.request.urlopen(req)
print (f)
fd = open ('file.jpg', 'wb')
shutil.copyfileobj (f, fd)
