// Init the likes counters
function likesCounter() {
    const mediaLikeBtns = document.querySelectorAll(".heart-likes");
    console.log(mediaLikeBtns);

    // const videoHeart = document.querySelector("#media-952343423");

    for (let i = 0; i < mediaLikeBtns.length; i++) {
        mediaLikeBtns[i].addEventListener("click", () => {
            addLike();
        });
    }
}

// Get the sum of all photographer media likes
function getLikesSum(medias) {
    let totalLikes = 0;

    medias.forEach(media => {
        totalLikes += media.likes;
    });

    return totalLikes
}

function addLike() {
    console.log("add like");
}