#urlImagen = https://static.zara.net/photos///2018/I/0/2/p/1564/329/802/2/w/560/1564329802_9_1_1.jpg?ts=1540380660644


imagesDirectoryPath = 'https://static.zara.net/photos//'
imagesPath = '/2018/I/0/2/p/4803/309/250/2/'
imageName = '4803309250_2_1'
timestamp = '1539863335654'
urlImagen = imagesDirectoryPath + imagesPath + 'w/400/' + imageName + '_1' + '.jpg?ts=' + timestamp
#print (urlImagen)
#print('https://static.zara.net/photos///2018/I/0/2/p/4803/309/250/2/w/400/4803309250_2_1_1.jpg?ts=1539863335654')


inicioCadenaImagen = dom.find("\"image\":{")
#Recortamos de la cadena general la información de la imagen. Metemos caracteres a mayores
#para asegurar que cogemos toda la información:
#imageInfo = dom[inicioCadenaImagen: inicioCadenaImagen + 120]
#print (imageInfo)


for match in imagesIterator:
    a = match.group(0)
    print (a[0:])
    #print(match.start(), match.group(0))
    #print "%s: %s" % (match.start(), match.group(1))

    
    # print(len(imagesIterator))
# print(imagesIterator[0].match)



img_tags = soup.find_all('img')

urls = [img['src'] for img in img_tags]


#for url in urls:
    #print (url)
    #filename = re.search(r'/([\w_-]+[.](jpg|gif|png))$', url)
    #with open(filename.group(1), 'wb') as f:
        #if 'http' not in url:
            # sometimes an image source can be relative 
            # if it is provide the base url which also happens 
            # to be the site variable atm. 
            #url = '{}{}'.format(site, url)
            #response = requests.get(url)
            #f.write(response.content)
