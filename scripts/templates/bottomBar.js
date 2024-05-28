//  Get and display user price and likes
function displayBottomBar(photographer, medias) {
    const bottomBar = document.querySelector("#user-btm-bar");
    const likesDiv = document.querySelector("#likes");

    const heart = document.createElement("img");
    heart.setAttribute("src", "./assets/icons/heart-like-black.svg");
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