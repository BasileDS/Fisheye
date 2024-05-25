function mediaFactory(data) {
    if (data.video) {
        const video = videoTemplate(data);
        return video
    }
    if(data.image) {
        const image = pictureTemplate(data);
        return image
    }
}