// Display photographer pictures and videos in media section
async function displayPhotographerMedias(medias) {
    const mediasSection = document.querySelector("#medias-section");
    mediasSection.innerHTML = "";

    medias.forEach(media => {
        const mediaTemplate = mediaFactory(media);
        mediasSection.appendChild(mediaTemplate);
    });
}