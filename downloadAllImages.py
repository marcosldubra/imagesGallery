import sys
import re
import requests
from bs4 import BeautifulSoup

import urllib.request
import shutil
import json
import os

import PIL
from PIL import Image

#directorio de imagenes:
imagesPath = 'https://static.zara.net/photos//'
imagesLocalPath = './front/static/'

#Si introducimos una url como argumento la cogemos, si no cogemos una por defecto:
if len(sys.argv) > 1:
    site = sys.argv[1]
else:
    site = 'https://www.zara.com/es/es/hombre-chaquetas-bombers-l645.html?v1=1079280'

#Lanzamos una request para descargar el dom de la pagina:
response = requests.get(site)

#Procesamos la respuesta y la convertimos en un string.
soup = BeautifulSoup(response.text, 'html.parser')
siteDom = str(soup.encode('utf-8'))

#Buscamos los productos que aparecen en la pagina para descargar sus imagenes mediante una expresion regular:
productsRegExp = "{\"id\":[0-9]+,\"type\":\"Product\",\"kind\":\"[a-zA-Z]*\",\"sequence\":[0-9]*,"
imagesRegExp = "\"image\":{\"name\":\"[0-9]*(_[0-9]+)*\",\"path\":\"(/[a-zA-Z0-9]+)+/\",\"timestamp\":\"[0-9]+\"}"
regExp = productsRegExp + imagesRegExp

productsIterator = re.finditer(regExp, siteDom)

#Aqui se almacenaran las rutas locales de las imagenes descargadas:
localImagesSources = []

#Recorremos los datos de cada producto para encontrar la ruta de la imagen correspondiente:
for match in productsIterator:
    #Buscamos los indices donde comienza cada dato:
    nameIndex = match.group(0).find("name\":")
    pathIndex = match.group(0).find("path\":")
    timestampIndex = match.group(0).find("timestamp\":")

    #Recortamos los datos que nos interesan:
    imageName = match.group(0)[nameIndex+7:pathIndex-3]
    imagePath = match.group(0)[pathIndex+7:timestampIndex-3]
    imageTimestamp = match.group(0)[timestampIndex+12:-2]

    #Componemos la url de la imagen:
    imageUrl = imagesPath + imagePath + 'w/400/' + imageName + '_1' + '.jpg?ts=' + imageTimestamp

    #Descargamos la imagen:
    req = urllib.request.Request(
        imageUrl,
        data=None,
        headers={
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
    })

    fileHandle = urllib.request.urlopen(req)

    #Abrimos el archivo donde se guardara la imagen. Modo escritura y fichero binario (wb)
    image = open (imagesLocalPath + imageName + '.jpg', 'wb')

    #Copiamos la imagen descargada en un fichero:
    shutil.copyfileobj (fileHandle, image)

    image.close()

    #Redimensionamos la imagen:
    newPercentageSize = 0.75
    img = Image.open(imagesLocalPath + imageName + '.jpg')
    newWidth = int((float(img.size[0]) * newPercentageSize))
    newHeigth = int((float(img.size[1]) * newPercentageSize))
    img = img.resize((newWidth, newHeigth), PIL.Image.ANTIALIAS)
    img.save(imagesLocalPath + imageName + '.jpg')

    localImagesSources.append('./static/' + imageName + '.jpg')

    print('Descargada: ' + imageName)

#Guardamos las rutas locales en un archivo json:
jsonSources = {}
jsonSources['images'] = localImagesSources

with open(imagesLocalPath + 'images.json', 'w') as file:
    json.dump(jsonSources, file)
