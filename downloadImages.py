import urllib.request
import shutil
import json
import os

#from PIL import Image

#Url de la que se descarga la imagen
url = 'https://static.zara.net/photos///2018/I/0/2/p/5588/471/403/2/w/400/5588471403_1_1_1.jpg?ts=1532007643757'
imagesSource = './front/static/'

req = urllib.request.Request(
    url,
    data=None,
    headers={
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
    })

fileHandle = urllib.request.urlopen(req)
print (fileHandle)

#Abrimos el archivo donde se guardará la imagen. Modo escritura y fichero binario (wb)
image = open (imagesSource + 'images/21.jpg', 'wb')

shutil.copyfileobj (fileHandle, image)

image.close()

#Editamos el fichero de recursos:
sourcesFile = 'images.json'

jsonSources = {}
jsonSources['images'] = ["/static/images/1.jpg",
        "/static/images/2.jpg",
        "/static/images/3.jpg",
        "/static/images/4.jpg",
        "/static/images/5.jpg",
        "/static/images/6.jpg",
        "/static/images/7.jpg",
        "/static/images/8.jpg",
        "/static/images/9.jpg",
        "/static/images/10.jpg",
        "/static/images/11.jpg",
        "/static/images/13.jpg"]
        
with open(os.path.join(imagesSource, sourcesFile), 'w') as file:
    json.dump(jsonSources, file)