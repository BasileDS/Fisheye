// Create a photographer picture card
function pictureTemplate(data) {
    const { title, image, likes, photographerId, id } = data;

    const picture = `./assets/images/medias-samples/${photographerId}/${image}`;

    const article = document.createElement("article");
    article.setAttribute("id", id);
    
    const mediaLink = document.createElement("a");
    mediaLink.setAttribute("href", "#!");
    mediaLink.classList.add("media-link");

    const pImage = document.createElement("img");
    pImage.classList.add("media-card-thumbnail");
    pImage.setAttribute("src", picture);
    pImage.setAttribute("alt", title);
    pImage.setAttribute("aria-haspopup", "true");
    pImage.setAttribute("aria-controls", "media-lightbox");
    pImage.setAttribute("aria-expanded", "false");
    pImage.setAttribute("aria-label", `${title}, closeup view`);
    
    const imgInfo = document.createElement("div");
    imgInfo.classList.add("images-infos");
    
    const pTitle = document.createElement("p");
    pTitle.textContent = title;

    // Create likes <p> and like <button> elements
    const mediaLikes = document.createElement("div");
    mediaLikes.classList.add("media-card-likes");
    const pLikes = document.createElement("p");
    pLikes.classList.add("nb-likes");
    pLikes.setAttribute("id", `likes-${id}`);
    pLikes.textContent = parseInt(likes);

    const mediaLikeLink = document.createElement("a");
    mediaLikeLink.setAttribute("href", "#!");
    mediaLikeLink.setAttribute("id", `media-${id}`);

    const likeSvg = document.createElement("img");
    likeSvg.classList.add("heart-likes");
    likeSvg.setAttribute("src", "./assets/icons/heart-like.svg");
    likeSvg.setAttribute("alt", `Heart Like for ${title}`);

    mediaLikeLink.appendChild(likeSvg);

    mediaLikes.appendChild(pLikes);
    mediaLikes.appendChild(mediaLikeLink);

    imgInfo.appendChild(pTitle);
    imgInfo.appendChild(mediaLikes);

    mediaLink.appendChild(pImage);

    article.appendChild(mediaLink);
    article.appendChild(imgInfo);

    return article
}