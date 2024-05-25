async function getPhotographers() {
        const response = await fetch("./data/photographers.json");
        photographers = await response.json();
        return photographers
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    
    photographers.forEach((photographer) => {
        const userCardDOM = photographerFactory(photographer, "card");
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);

}

init();