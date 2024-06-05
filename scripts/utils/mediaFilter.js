async function mediaFilter() {

    // Get data from session storage
    const medias = await getPhotographerData("media");

    const filterInput = document.querySelector("#media-filter");
    const filterValue = filterInput.value;

    switch (filterValue) {
        case "popularite":
            const mediasByLikes = medias.sort((a, b) => b.likes - a.likes);

            setFilteredMediasToSessionStorage(mediasByLikes);
            displayPhotographerMedias(mediasByLikes);
        return true

        case "date":
            const mediasByDate = medias.sort((a, b) => {
                const aFormattedDate = new Date(a.date);
                const bFormattedDate = new Date(b.date);
                return bFormattedDate - aFormattedDate; });

            setFilteredMediasToSessionStorage(mediasByDate);    
            displayPhotographerMedias(mediasByDate);
            return true

        case "titre":
            const mediasByTitles = medias.sort((a, b) => a.title > b.title);

            setFilteredMediasToSessionStorage(mediasByTitles);
            displayPhotographerMedias(mediasByTitles);
            return true
            
        default:
            break;
    }
}

// Display filters on user page
function displayMediaFilters() {
    const legend = document.createElement("legend");
    legend.textContent = "Trier par";

    const select = document.createElement("select");
    select.name = "filtre";
    select.className = "media-filter";
    select.id = "media-filter";
    select.setAttribute("autocomplete", "off");
    select.setAttribute("aria-label", "Filter medias");

    const options = [
        { value: "popularite", text: "Popularité", selected: true },
        { value: "date", text: "Date" },
        { value: "titre", text: "Titre" }
    ];

    options.forEach(function(optionData) {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.textContent = optionData.text;
        if (optionData.selected) {
            option.selected = true;
        }
        select.appendChild(option);
    });

    const filterWrapper = document.querySelector("#media-filters");

    filterWrapper.appendChild(legend);
    filterWrapper.appendChild(select);
}