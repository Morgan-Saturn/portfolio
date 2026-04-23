const images = document.querySelector('.images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
function updateCarrousel(){
    let offset = 0;
    for (let i = 0; i < currentIndex; i++) {
        offset -= images.children[i].getBoundingClientRect().width
    }
    images.style.transform = `translateX(${offset}px)`;
}
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.children.length;
    updateCarrousel();
});
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.children.length) % images.children.length;
    updateCarrousel();
});