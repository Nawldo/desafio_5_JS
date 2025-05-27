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
        setInterval(() => this.next(), 4000); // Troca de imagem a cada 4 segundos
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.carouselElement.style.backgroundImage = `url('${this.images[this.currentIndex]}')`;
        this.titleElement.innerHTML = `<a href="${this.urls[this.currentIndex]}">${this.titles[this.currentIndex]}</a>`;

    }
}

document.addEventListener("DOMContentLoaded", () => {
    const images = ["img/imagem_1.jpg", "img/imagem_2.jpg", "img/imagem_3.jpg"];
    const titles = ["Esta é a nova Ranger Ford 2022. Verifique novidades. ", "Ford T, primeiro carro popular da història.", "Novo Ford Branco Sport 2022."];
    const urls = ["#car1", "#car2", "#car3"];

    const carousel = new Carousel(images, titles, urls);

    // Adicionando funcionalidade aos botões
    document.getElementById("btnAvance").addEventListener("click", () => {
        carousel.next();
    });

    document.getElementById("btnVoltar").addEventListener("click", () => {
        carousel.currentIndex = (carousel.currentIndex - 1 + carousel.images.length) % carousel.images.length;
        carousel.carouselElement.style.backgroundImage = `url('${carousel.images[carousel.currentIndex]}')`;
        carousel.titleElement.innerHTML = `<a href="${carousel.urls[carousel.currentIndex]}">${carousel.titles[carousel.currentIndex]}</a>`;
    });
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

button {
  padding: 5px 10px;
}

div#carousel {
   width: 90%;
   height: 86%;
   object-fit: contain;
}   

div#botoes {
    display: flex;
    gap: 20px; /* Espaço entre os botões */
}
`
// Adiciona a regra ao <head> da página
document.head.appendChild(style);

