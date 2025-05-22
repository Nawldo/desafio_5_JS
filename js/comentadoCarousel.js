// Classe Carousel para gerenciar a exibição do carrossel de imagens
class Carousel {
    constructor(images, titles, urls) {
        // Array de imagens
        this.images = images;
        // Array de títulos para cada imagem
        this.titles = titles;
        // Array de URLs para os títulos
        this.urls = urls;
        // Índice da imagem atual no carrossel
        this.currentIndex = 0;

        // Obtendo os elementos HTML onde as imagens e títulos serão exibidos
        this.carouselElement = document.getElementById("carousel");
        this.titleElement = document.getElementById("carousel-title");

        // Inicia a rotação do carrossel
        this.start();
    }

    // Método para iniciar o carrossel
    start() {
        this.next(); // Mostra a primeira imagem e título
        setInterval(() => this.next(), x); // Alterna para a próxima imagem a cada x segundos
    }

    // Método para alternar imagens e textos no carrossel
    next() {
        // Atualiza o índice da imagem atual no carrossel
        this.currentIndex = (this.currentIndex + 1) % this.images.length;

        // Atualiza a imagem de fundo do carrossel
        this.carouselElement.style.backgroundImage = `url('${this.images[this.currentIndex]}')`;

        // Atualiza o título exibido abaixo da imagem e adiciona um link
        this.titleElement.innerHTML = `<a href="${this.urls[this.currentIndex]}">${this.titles[this.currentIndex]}</a>`;
    }
}

// Aguarda a página carregar para iniciar o carrossel
document.addEventListener("DOMContentLoaded", () => {
    // Arrays contendo imagens, títulos e URLs para o carrossel
    const images = ["img/imagem_1.jpg", "img/imagem_2.jpg", "img/imagem_3.jpg"];
    const titles = ["Carro 1", "Carro 2", "Carro 3"];
    const urls = ["#car1", "#car2", "#car3"];


    // Instancia o carrossel com as informações fornecidas
    new Carousel(images, titles, urls);
});
