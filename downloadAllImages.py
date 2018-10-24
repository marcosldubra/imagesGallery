import re
import requests
from bs4 import BeautifulSoup

site = 'https://www.zara.com/es/es/hombre-chaquetas-bombers-l645.html?v1=1079280'


#urlImagen = https://static.zara.net/photos///2018/I/0/2/p/1564/329/802/2/w/560/1564329802_9_1_1.jpg?ts=1540380660644

imagesDirectoryUrl = 'https://static.zara.net/photos//'
imagePath = '/2018/I/0/2/p/4803/309/250/2/'
imageName = '4803309250_2_1'

#Buscar no dom por imagenes para atopar as rutas de cada unha

#https://static.zara.net/photos///2018/I/0/2/p/4803/309/250/2/4803309250_2_1
#https://static.zara.net/photos///2018/I/0/2/p/4803/309/250/2/w/400/4803309250_2_1_1.jpg?ts=1539863335654
response = requests.get(site)

soup = BeautifulSoup(response.text, 'html.parser')

with open("output1.html", "w", encoding="utf-8") as file:
    file.write(str(soup))

# f = open ('prueba.txt', 'w')
# #print (str(soup))
# f.write (str(soup.encode('utf-8')))
# f.close()

img_tags = soup.find_all('img')

urls = [img['src'] for img in img_tags]


for url in urls:
    print (url)
    #filename = re.search(r'/([\w_-]+[.](jpg|gif|png))$', url)
    #with open(filename.group(1), 'wb') as f:
        #if 'http' not in url:
            # sometimes an image source can be relative 
            # if it is provide the base url which also happens 
            # to be the site variable atm. 
            #url = '{}{}'.format(site, url)
            #response = requests.get(url)
            #f.write(response.content)
