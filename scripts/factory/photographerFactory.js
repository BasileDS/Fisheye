function photographerFactory(data, template) {
    switch (template) {
        case "card":
            const photographerModel = photographerCardTemplate(data);
            const userCardDOM = photographerModel.getUserCardDOM();
            
            return userCardDOM
        case "header":
            const headerModel =  photographerHeaderTemplate(data);
            const headerDOM = headerModel.getHeaderDOM();

            return headerDOM
        default:
            break;
    }
}