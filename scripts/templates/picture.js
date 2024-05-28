function pictureTemplate(data) {
    const { title, image, likes, photographerId, id, date } = data;

    const picture = `./assets/images/medias-samples/${photographerId}/webp/${image}`;

    const article = document.createElement("article");
    article.setAttribute("id", id);

    const pImage = document.createElement("img");
    pImage.classList.add("media-card-thumbnail");
    pImage.setAttribute("src", picture);

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
    const likeSvg = document.createElement("img");
    likeSvg.classList.add("heart-likes");
    likeSvg.setAttribute("src", "./assets/icons/heart-like.svg");
    likeSvg.setAttribute("id", `media-${id}`);

    mediaLikes.appendChild(pLikes);
    mediaLikes.appendChild(likeSvg);

    imgInfo.appendChild(pTitle);
    imgInfo.appendChild(mediaLikes);

    article.appendChild(pImage);
    article.appendChild(imgInfo);

    return article
}