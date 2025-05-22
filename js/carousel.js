class Carousel {
    constructor(images, titles, urls) {
        this.images = images;
        this.titles = titles;
        this.urls = urls;
        this.currentIndex = 0;
        this.carouselElement = document.getElementById("carousel");
        this.titleElement = document.getElementById("carousel-title");
        this.start();
    }

    start() {
        this.next(); 
        setInterval(() => this.next(), 2000); // Troca de imagem a cada 2 segundos
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.carouselElement.style.backgroundImage = `url('${this.images[this.currentIndex]}')`;
        this.titleElement.innerHTML = `<a href="${this.urls[this.currentIndex]}">${this.titles[this.currentIndex]}</a>`;
    }
}

    document.addEventListener("DOMContentLoaded", () => {
    const images = ["img/imagem_1.jpg", "img/imagem_2.jpg", "img/imagem_3.jpg"];
    const titles = ["Esta é a nova Ranger Ford 2022. Verifique novidades. ", "Carro 1",  "Novo Ford Branco Sport 2022"];
    const urls = ["#car1", "#car2", "#car3"];

    new Carousel(images, titles, urls);
});
