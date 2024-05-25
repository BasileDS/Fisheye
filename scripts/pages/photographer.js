// Get and return photographer's id in the url
function getPhotographerId() {
    const params = new URL(document.location).searchParams;
    const photographerId = parseInt(params.get("id"));

    return photographerId
}

// Take the property and returns all the data matching with the photographer id
async function getPhotographerData(prop) {
    const photographerId = getPhotographerId();

    const response = await fetch("./data/photographers.json");
    const responseData = await response.json();
    
    if (prop === "photographers") {
        const photographersProp = responseData.photographers;
        const photographerData = photographersProp.find((photographer) => {
            return photographer.id === photographerId });
        return photographerData;
    }
    
    if (prop === "media") {
        const photographersMedias = responseData.media;
        const photographerMediasData = photographersMedias.filter((photographer) => {
            return photographer.photographerId === photographerId });
        return photographerMediasData;
    }
}

// Display photographer information in photographer header
async function displayPhotographerData(photographer) {
    const photographHeader = document.querySelector("#photograph-header");
    
    const photographerData = getUserDataDOM(photographer);
    const photographerPresentation = photographerData.presentation;
    const photographerPicture = photographerData.img;

    photographHeader.prepend(photographerPresentation);
    photographHeader.appendChild(photographerPicture);
}

// Display photographer pictures and videos in media section
async function displayPhotographerMedias(medias) {
    const mediasSection = document.querySelector("#medias-section");
    mediasSection.innerHTML = "";

    medias.forEach(media => {
        const mediaTemplate = mediaFactory(media);
        mediasSection.appendChild(mediaTemplate);
    }); 
}

async function init() {
    const photographer = await getPhotographerData("photographers");
    displayPhotographerData(photographer);

    const medias = await getPhotographerData("media");

    mediaFilter(medias);

    const filterInput = document.querySelector("#media-filter");
    filterInput.addEventListener("change", () => mediaFilter(medias) );
}

init();