// Lightbox DOM elements
const lightboxContainer = document.querySelector("#media-lightbox");

const leftBtn = document.querySelector(".lightbox-left-arrow");
const rightBtn = document.querySelector(".lightbox-right-arrow");
const closeBtn = document.querySelector(".lightbox-close-cross");

const lightboxMediaDOM = document.querySelector(".lightbox-media");

let currentMediaIndex = 0;
let currentMediaId = 0;

// listen to lightbox navigation buttons
closeBtn.addEventListener("click", closeLightbox);
leftBtn.addEventListener("click", prevMedia);
rightBtn.addEventListener("click", nextMedia);

const lightboxNav = (e) => {
    switch (e.key) {
        case "Escape":
            e.preventDefault();
            closeLightbox();
            break;
            
            case "ArrowLeft":
            e.preventDefault();
            prevMedia();
            break;
            
            case "ArrowRight":
            e.preventDefault();
            nextMedia();
            break;
    
        default:
            break;
    };
};

// Open media lightbox
async function openLightbox(mediaId) {
    main.setAttribute("aria-hidden", "true");
    body.classList.add("no-scroll");
    header.setAttribute("aria-hidden", "true");

    
    lightboxContainer.style.display = "flex";
    lightboxContainer.setAttribute("aria-hidden", "false");
    
    currentMediaId = parseInt(mediaId);
    
    const medias = await getFilteredMediasfromSessionStorage();
    const isClickedMedia = (index) => index.id === parseInt(currentMediaId);
    currentMediaIndex = medias.findIndex(isClickedMedia);
    const media = medias[currentMediaIndex];
    
    displayLightboxMedia(media);
    
    closeBtn.focus();

    document.addEventListener("keydown", lightboxNav);
}

// Display photographer specific picture or video
function displayLightboxMedia(media) {
    lightboxMediaDOM.innerHTML = "";    

    const photographerId = media.photographerId;

    const isVideo = media.video ? true : false;

    switch (isVideo) {
        case true:
            const imgSrc = media.video;

            const video = document.createElement("video");
            video.classList.add("lightbox-media-element");
            video.setAttribute("src", `./assets/images/medias-samples/${photographerId}/${imgSrc}`);
            video.setAttribute("alt", media.title)
            video.setAttribute("autoplay", true);
            video.setAttribute("controls", true);

            lightboxMediaDOM.appendChild(video);
            break;
    
        case false:
            const vidSrc = media.image;

            const img = document.createElement("img");
            img.classList.add("lightbox-media-element");
            img.setAttribute("src", `./assets/images/medias-samples/${photographerId}/${vidSrc}`);
            img.setAttribute("alt", media.title);

            lightboxMediaDOM.appendChild(img);
            break;
    
        default:
            break;
    }

    const mediaTitle = document.createElement("p");
    mediaTitle.textContent = media.title;
    lightboxMediaDOM.appendChild(mediaTitle);
}

async function nextMedia() {
    const medias = await getFilteredMediasfromSessionStorage();
    const isClickedMedia = (index) => index.id === parseInt(currentMediaId);
    currentMediaIndex = medias.findIndex(isClickedMedia);
    currentMediaIndex = currentMediaIndex + 1;

    const mediaIndex = currentMediaIndex === medias.length ? 0 : currentMediaIndex;

    const media = medias[mediaIndex];
    currentMediaId = media.id;
    displayLightboxMedia(media)
}

async function prevMedia() {
    const medias = await getFilteredMediasfromSessionStorage();
    const isClickedMedia = (index) => index.id === parseInt(currentMediaId);
    currentMediaIndex = medias.findIndex(isClickedMedia);
    currentMediaIndex = currentMediaIndex - 1;

    const mediaIndex = currentMediaIndex === -1 ? medias.length - 1 : currentMediaIndex;

    const media = medias[mediaIndex];
    currentMediaId = media.id;
    displayLightboxMedia(media)
}

// Close media lightbox
function closeLightbox() {
    main.setAttribute("aria-hidden", "false");
    header.setAttribute("aria-hidden", "false");
    body.classList.remove("no-scroll");

    lightboxContainer.style.display = "none";
    lightboxContainer.setAttribute("aria-hidden", "true");

    document.removeEventListener("keydown", lightboxNav);
}