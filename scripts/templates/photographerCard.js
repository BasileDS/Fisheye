// Create a photographer card
function photographerCardTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    console.log(data);

    const picture = `./assets/photographers/${portrait}`;

    // Creates a return photographer card
    function getUserCardDOM() {
        // Init the wrapper (article) and its content
        const article = document.createElement( 'article' );

        const photographerLink = document.createElement( 'a' );
        photographerLink.classList.add("flex-col-ctr-ctr", "photographerCardLink");
        photographerLink.setAttribute("id", id);
        photographerLink.setAttribute("href", "#");

        const divStatic = document.createElement( 'div' );
        divStatic.classList.add("flex-col-ctr-ctr");

        // Create <img> element
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portrait de ${name} sur Fisheye.com`);
        img.classList.add("photographers-portraits");

        // Create <h2> element
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        // Create all <p> elements of photographers <article> **Could be done using a function**
        const pLocation = document.createElement( 'p' );
        pLocation.classList.add("photographer-location");
        pLocation.textContent = `${city}, ${country}`;
        
        const pTagline = document.createElement( 'p' );
        pTagline.classList.add("photographer-tagline");
        pTagline.textContent = tagline;

        const pPrice = document.createElement( 'p' );
        pPrice.classList.add("photographer-price");
        pPrice.textContent = `${price}€/jour`;

        // Create <article> and create <a> and <div> into it
        article.appendChild(photographerLink);
        article.appendChild(divStatic);

        // Create  photographers node elements
        photographerLink.appendChild(img);
        photographerLink.appendChild(h2);
        divStatic.appendChild(pLocation);
        divStatic.appendChild(pTagline);
        divStatic.appendChild(pPrice);

        // Load photographer page on click and add the ID parameters in the URL
        photographerLink.addEventListener("click", () => {
            location.replace(`./photographer.html?id=${id}`);
        })

        return (article);
    }

    return { name, picture, getUserCardDOM }
}