// Display photographers data
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    
    photographers.forEach((photographer) => {
        const userCardDOM = photographerFactory(photographer, "card");
        photographersSection.appendChild(userCardDOM);
    });
}

// Initialize home page
async function init() {
    const { photographers } = await getPhotographerData("all");
    displayData(photographers);

}

init();