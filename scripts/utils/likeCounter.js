// Init the likes counters
async function likesCounter(id) {

    // Get user medias
    const userMedia = getUserMediasByUserId(id);

    // Stores each media id in an array
    const mediasId = [];
    userMedia.forEach(media => {
        mediasId.push(media.id);
    });

    // Add listeners on each clickable heart
    for (let i = 0; i < mediasId.length; i++) {
        const mediaLikeBtns = document.querySelector(`#media-${mediasId[i]}`);
        mediaLikeBtns.addEventListener("click", () => {
            addLike(mediasId[i], id);
        });
    }
}

// Increments likes on media articles and bottom bar
function addLike(mediaId, userId) {
    // get parsed session storage data
    const sessionStorage = window.sessionStorage.getItem("photographers");
    const photographers = JSON.parse(sessionStorage);
    const photographersMedias = photographers.media;
    const userMedias = photographersMedias.filter((photographersMedias) => photographersMedias.photographerId === userId);
    const mediaArray = userMedias.filter((userMedias) => userMedias.id === mediaId);
    const media = mediaArray[0];
    
    // increment number of like
    const newLikes = media.likes + 1;

    // Update the number of likes in the object
    media["likes"] = newLikes;

    // Set the new value in local Storage
    const newSessionData = JSON.stringify(photographers);
    window.sessionStorage.setItem("photographers", newSessionData);

    console.log(`${media.title} has ${media["likes"]} likes`);
}

// Get the sum of all photographer media likes
function getLikesSum(medias) {
    let totalLikes = 0;

    medias.forEach(media => {
        totalLikes += media.likes;
    });

    return totalLikes
}

