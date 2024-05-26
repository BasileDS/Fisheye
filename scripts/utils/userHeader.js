// Display user information in photographer header
function displayPhotographerHeader(photographer) {
    const photographHeader = document.querySelector("#photograph-header");
    
    const photographerData = photographerFactory(photographer, "header");
    const photographerPresentation = photographerData.presentation;
    const photographerPicture = photographerData.img;

    photographHeader.prepend(photographerPresentation);
    photographHeader.appendChild(photographerPicture);
}