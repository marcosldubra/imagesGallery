export function getImagesFromApi() {
    return fetch('/api/images')
            .then( resp => resp.json())
            .then( data => {
                const sources = deleteSourcesFromResponse(data);
                return sources
            });;
}
