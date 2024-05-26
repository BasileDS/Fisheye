async function mediaFilter() {

    // Get data from session storage
    const medias = await getPhotographerData("media");

    const filterInput = document.querySelector("#media-filter");
    const filterValue = filterInput.value;

    switch (filterValue) {
        case "popularite":
            const mediasByLikes = medias.sort((a, b) => b.likes - a.likes);
            displayPhotographerMedias(mediasByLikes);
        return true
        case "date":
            const mediasByDate = medias.sort((a, b) => {
                const aFormattedDate = new Date(a.date);
                const bFormattedDate = new Date(b.date);
                return bFormattedDate - aFormattedDate; });
            displayPhotographerMedias(mediasByDate);
            return true
        case "titre":
            const mediasByTitles = medias.sort((a, b) => a.title > b.title);
            displayPhotographerMedias(mediasByTitles);
            return true
        default:
            break;
    }
}