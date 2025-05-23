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
    const titles = ["Esta é a nova Ranger Ford 2022. Verifique novidades. ", "Ford T, primeiro carro popular da història.",  "Novo Ford Branco Sport 2022."];
    const urls = ["#car1", "#car2", "#car3"];

    new Carousel(images, titles, urls);
})

// Cria um novo elemento <style> e insere regras CSS
const style = document.createElement("style");
style.innerHTML = 
`
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Garante que ocupe toda a altura da tela */
  flex-direction: column; /* Coloca os elementos um abaixo do outro */
} 

div#carousel {
   width: 86%;
   height: 86%;
   object-fit: contain;

`
// Adiciona a regra ao <head> da página
document.head.appendChild(style);

