import images from '../static/images.json';

export default function getImages (req, res, next) {
    req.send(images);
}
