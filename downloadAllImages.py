import re
import requests
from bs4 import BeautifulSoup

#Lanzamos una request para descargar el dom de la pagina:
site = 'https://www.zara.com/es/es/hombre-chaquetas-bombers-l645.html?v1=1079280'
response = requests.get(site)

#Procesamos la respuesta y la convertimos en un string.
soup = BeautifulSoup(response.text, 'html.parser')
siteDom = str(soup.encode('utf-8'))

#Buscamos el numero de productos que aparecen en la pagina para descargar sus imagenes mediante una expresion regular:
regExp = "{\"id\":[0-9]+,\"type\":\"Product\",\"kind\":\"[a-zA-Z]*\",\"sequence\":[0-9]*,\"image\":"
productsIterator = re.finditer(regExp, siteDom)
imagesCounter = len(list(re.finditer(regExp, siteDom)))
print (imagesCounter)


#analisis:

# {"id":7269057,"type":"Product","kind":"Wear","sequence":3,"image":{"name":"5479350800_2_1","path":"/2018/I/0/2/p/5479/350/800/2/","timestamp":"1539972048019"},"xmedia":


for match in productsIterator:
    print (match.group(0)[0:])
    #print(match.start(), match.group(0))
  
#analisis.  

