function getUserMediasByUserId(id) {
    const sessionStorage = window.sessionStorage.getItem("photographers");
    const photographers = JSON.parse(sessionStorage);
    const photographersMedias = photographers.media;
    const userMedias = photographersMedias.filter((photographersMedias) => photographersMedias.photographerId === id);

    return userMedias
}

function getUserMedia(MediaId) {
    const sessionStorage = window.sessionStorage.getItem("photographers");
    const photographers = JSON.parse(sessionStorage);
    const photographersMedias = photographers.media;
    const media = photographersMedias.filter((photographersMedias) => photographersMedias.id === MediaId);

    return media
}
