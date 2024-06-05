// Display photographer pictures and videos in media section
function displayPhotographerMedias(medias) {
    const mediasSection = document.querySelector("#medias-section");
    mediasSection.innerHTML = "";

    let mediaTemplate = [];
    medias.forEach(media => {
        mediaTemplate = mediaFactory(media);
        mediasSection.appendChild(mediaTemplate);
    });
    
    // Manage like count in session storage
    likesCounter(medias[0].photographerId);

    const mediaImgs = document.querySelectorAll(".media-link");
    for (let i = 0; i < mediaImgs.length; i++) {
        const mediaId = mediaImgs[i].parentNode.id;

        mediaImgs[i].addEventListener("click", () => openLightbox(mediaId));
        
        mediaImgs[i].addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              mediaImgs[i].click();
            }
          });
    };

    return medias
}