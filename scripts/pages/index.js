// Get data from JSON fil or Sessions Storage
async function getPhotographers() {
    let photographers = {};
    const sessionStorageData = window.sessionStorage.getItem("photographers");

    if (sessionStorageData === null) {
        const response = await fetch("./data/photographers.json");
        photographers = await response.json();

        const sessionsData = JSON.stringify(photographers); 
        window.sessionStorage.setItem("photographers", sessionsData);

        console.log("Data fetched from JSON file");
    }

    if (sessionStorageData) {
        const sessionStorage = window.sessionStorage.getItem("photographers");
        photographers = JSON.parse(sessionStorage);

        console.log("Data fetched from session storage");
    }

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