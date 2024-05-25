function videoTemplate(data) {
    const { title, video, likes, photographerId, id, date } = data;

    const article = document.createElement("article");
    article.setAttribute("id", id);

    const vidInfo = document.createElement("div");
    vidInfo.classList.add("images-infos");

    const pTitle = document.createElement("p");
    pTitle.textContent = title;

    // Create likes <p> and like <button> elements
    const mediaLikes = document.createElement("div");
    mediaLikes.classList.add("media-card-likes");
    const pLikes = document.createElement("p");
    pLikes.classList.add("nb-likes");
    pLikes.setAttribute("id", `likes-${id}`);
    pLikes.textContent = parseInt(likes);
    const likeSvg = document.createElement("img");
    likeSvg.classList.add("heart-likes");
    likeSvg.setAttribute("src", "./assets/icons/heart-like.svg");
    likeSvg.setAttribute("id", `media-${id}`);

    mediaLikes.appendChild(pLikes);
    mediaLikes.appendChild(likeSvg);

    vidInfo.appendChild(pTitle);
    vidInfo.appendChild(mediaLikes);

    
    article.appendChild(vidInfo);

    // Create the video thumbnail after node elements has been created to prevent likesCounter listener to miss it
    const videoUrl = (`./assets/images/medias-samples/${photographerId}/${video}`);
    createVideoThumbnail(videoUrl).then(canvas => {
        article.prepend(canvas);
    });

    return article
}

// Creates a thumbail for each video
function createVideoThumbnail(videoUrl) {
    return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.src = videoUrl;
        video.crossOrigin = "anonymous"; // Handle cross-origin issues if any

        // Set the current time to capture the thumbnail (e.g., 1 second)
        video.addEventListener("loadeddata", () => {
            video.currentTime = 0.5;
        });

        video.addEventListener("seeked", () => {
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0);
            resolve(canvas);
        });

        video.addEventListener("error", (e) => {
            reject(e);
        });
    });
}