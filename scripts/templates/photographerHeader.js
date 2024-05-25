function getUserDataDOM(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `./assets/photographers/${portrait}`;

    // Create user presentation wrapper
    const presentation = document.createElement("div");
    presentation.classList.add("photograph-presentation");
    
    // Create user prensentation elements
    const h1 = document.createElement("h1");
    h1.textContent = name;

    const pLocation = document.createElement( 'p' );
    pLocation.classList.add("photographer-location");
    pLocation.textContent = `${city}, ${country}`;

    const pTagline = document.createElement( 'p' );
    pTagline.classList.add("photographer-tagline");
    pTagline.textContent = tagline;
    
    // Create user picture
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Portrait de ${name} sur Fisheye.com`);
    img.classList.add("user-picture", "photographers-portraits")

    presentation.appendChild(h1);
    presentation.appendChild(pLocation);
    presentation.appendChild(pTagline);

    return { presentation, img }
}