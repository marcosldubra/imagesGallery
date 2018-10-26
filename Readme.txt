La solución se compone de dos partes:
  Un script en python3 (downloadAllImages.py) encargado de descargar las imágenes.
  Una vista realizada con React y Redux encargada de mostrar las imágenes.

Para probarlo:
  1) Descargar/descomprimir el código.

  2)Configurar entorno:
    2.1)Instalar python3 y el gestor de paquetes pip.

    2.2)En un terminal de comandos (entorno UNIX):
      Ejecutar pip3 install requests
      Ejecutar pip3 install Pillow
      Ejecutar pip3 install simplejson
      Ejecutar pip install beautifulsoup4

    2.3) Instalar node.js.

    2.4) Moverse al directorio /front de la solución y ejecutar el comando npm install.

    2.5) Desde el directorio raíz de la solución ejecutar el script:

      $python3 downloadAllImages.py https://www.zara.com/es/es/hombre-pantalones-casual-l843.html?v1=1080099

      Si ejecutamos solamente $python3 downloadAllImages.py se descargarán las imágenes de una sección de zara.com predeterminada.
      Como argumento podemos introducir la url de cualquier dirección de la página zara.com.

    2.6)En un terminal y desde el directorio ./front ejecutar el comando $npm run json-server. Este comando
      levanta un servidor de archivos json.

    2.7) En otro terminal y también desde el directorio ./front ejecutar el comando $npm start.

    2.8) Abrir la url http://localhost:3030.
        Al pulsar el botón 'Cargar galería' se muestran las imágenes descargadas en el punto 2.5).
        Si ejecutamos de nuevo el script del punto 2.5) con otra url y pulsamos de nuevo el botón, se muestran las imágenes de la nueva sección.
