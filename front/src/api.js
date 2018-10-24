/*Esta función se usa como Mock para simular una carga aleatoria de imágenes.
Borra del total de imágenes recuperados un número de imágenes aleatorio
devolviendo un mínimo de 6 imágenes.
*/
const deleteSourcesFromResponse = ( data ) => {
    const minImagesDeleted = 0;
    const minImagesReturned = 6;
    const maxImagesDeleted = data.length - minImagesReturned;
    
    const imagesDeleted = Math.floor(Math.random() * ( maxImagesDeleted - minImagesDeleted )) + minImagesDeleted;
    data.splice(0, imagesDeleted);  
    
    return data;
}

export function getImagesFromApi() {
    return fetch('/api/images')
            .then( resp => resp.json())
            .then( data => {
                const sources = deleteSourcesFromResponse(data);
                
                return sources
            });;
}
