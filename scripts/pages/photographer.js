// Display user information in photographer header
function displayPhotographerHeader(photographer) {
    const photographHeader = document.querySelector("#photograph-header");
    
    const photographerData = photographerFactory(photographer, "header");
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

    // Manage like count in session storage
    likesCounter(medias[0].photographerId);

    return true
}

//  Get and display user price and likes
function displayBottomBar(photographer, medias) {
    const bottomBar = document.querySelector("#user-btm-bar");
    const likesDiv = document.querySelector("#likes");

    const heart = document.createElement("img");
    heart.setAttribute("src", "./assets/icons/heart-like.svg");
    heart.classList.add("likes-icon");

    const price = document.createElement("p");
    price.textContent = `${photographer.price} / jour`;

    const nbLikes = document.createElement("p");
    nbLikes.setAttribute("id", "total-likes");
    nbLikes.textContent = getLikesSum(medias);

    likesDiv.appendChild(nbLikes);
    likesDiv.appendChild(heart);

    bottomBar.appendChild(price);
}

// Init the page 
async function init() {
    const photographer = await getPhotographerData("photographers");
    displayPhotographerHeader(photographer);

    // Get and display medias on page load
    const medias = await getPhotographerData("media");

    displayPhotographerMedias(medias);

    // Listen to the filter value and display sorted media if changed
    const filterInput = document.querySelector("#media-filter");
    filterInput.addEventListener("change", () => mediaFilter() );

    // Display user likes and price
    displayBottomBar(photographer, medias);
}

init();