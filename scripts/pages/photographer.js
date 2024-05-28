// Init the page 
async function init() {
    // Display photographer header
    const photographer = await getPhotographerData("photographers");
    displayPhotographerHeader(photographer);

    // Display filters section
    displayMediaFilters();

    // Display user media gallery
    const medias = await getPhotographerData("media");
    displayPhotographerMedias(medias);
    mediaFilter();

    // Listen to the filter value and display sorted media if changed
    const filterInput = document.querySelector("#media-filter");
    filterInput.addEventListener("change", mediaFilter);

    // Display user likes and price
    displayBottomBar(photographer, medias);
}

init();