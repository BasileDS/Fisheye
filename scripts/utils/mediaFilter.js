function mediaFilter(medias) {
    const filterInput = document.querySelector("#media-filter");
    const filterValue = filterInput.value;

    switch (filterValue) {
        case "popularite":
            const likesFilter = medias.sort((a, b) => b.likes - a.likes);
            displayPhotographerMedias(likesFilter);
            break
        case "date":
            const dateFilter = medias.sort((a, b) => {
                const aFormattedDate = new Date(a.date);
                const bFormattedDate = new Date(b.date);
                return bFormattedDate - aFormattedDate; });
            displayPhotographerMedias(dateFilter);
            break
        case "titre":
            const titleFilter = medias.sort((a, b) => a.title > b.title);
            displayPhotographerMedias(titleFilter);
            break
        default:
            break;
    }
}