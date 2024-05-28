// Get all or part of photographer data 
async function getPhotographerData(prop) {
    const photographerId = getPhotographerId();

    // const response = await fetch("./data/photographers.json");
    // const responseData = await response.json();

    let responseData = {};
    const sessionStorageData = window.sessionStorage.getItem("photographers");

    if (sessionStorageData === null) {
        const response = await fetch("./data/photographers.json");
        responseData = await response.json();

        const sessionsData = JSON.stringify(responseData); 
        window.sessionStorage.setItem("photographers", sessionsData);
    }

    if (sessionStorageData) {
        const sessionStorage = window.sessionStorage.getItem("photographers");
        responseData = JSON.parse(sessionStorage);
    }
    
    if (prop === "all") {
        return responseData;
    }
    
    if (prop === "photographers") {
        const photographersProp = responseData.photographers;
        const photographerData = photographersProp.find((photographer) => 
            photographer.id === photographerId );
        return photographerData;
    }
    
    if (prop === "media") {
        const photographersMedias = responseData.media;
        const photographerMediasData = photographersMedias.filter((photographer) => photographer.photographerId === photographerId );
        return photographerMediasData;
    }
}

 // Get and return photographer's id in the url
 function getPhotographerId() {
    const params = new URL(document.location).searchParams;
    const photographerId = parseInt(params.get("id"));

    return photographerId
}

// Get all user medias from local storage using User id
function getUserMediasByUserId(id) {
    const sessionStorage = window.sessionStorage.getItem("photographers");
    const photographers = JSON.parse(sessionStorage);
    const photographersMedias = photographers.media;
    const userMedias = photographersMedias.filter((photographersMedias) => photographersMedias.photographerId === id);

    return userMedias
}

// Get specific media from local storage using media id
function getUserMediaByMediaId(mediaId) {
    const userId = getPhotographerId();  

    const sessionStorage = window.sessionStorage.getItem("photographers");
    const photographers = JSON.parse(sessionStorage);
    const photographersMedias = photographers.media;
    const medias = photographersMedias.filter((photographersMedias) => photographersMedias.photographerId === userId);
    const media = medias.filter((medias) => medias.id === parseInt(mediaId));
    
    return media
}

function setFilteredMediasToSessionStorage(medias) {
    const storageMedias = JSON.stringify(medias);
    window.sessionStorage.setItem("filtered medias", storageMedias);
}

function getFilteredMediasfromSessionStorage() {
    const fromSessionMedias = window.sessionStorage.getItem("filtered medias");
    const medias = JSON.parse(fromSessionMedias);
    return medias
}