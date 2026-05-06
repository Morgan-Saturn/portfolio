//const next = document.querySelector(".next");
//const prev = document.querySelector(".prev");
const chevrons = document.querySelectorAll(".chevrons i");
const slides = document.querySelectorAll(".photos");
//let currentImg = 0;

//function updateImg(){
//let offset = 0;
   // for (let i = 0; i < currentImg; i++) {
   //     offset -= slide
   // s.children[i].getBoundingClientRect().height
        
//}
 //   images.style.transform = `translateY(${offset}px)`;
//}

//next.addEventListener("click", ()=>{
 //   currentImg = (currentImg + 1);
 //   updateImg();
//});
//prev.addEventListener("click", ()=>{
//    currentImg = (currentImg - 1);
//    updateImg();
//});


// c'est un tableau d'images. [0, 1, 2, etc] si on est sur 1 et on fait sur next, il faut passer à 2, etc
//e.target.class est égal à next ? Si oui on renvoie 1, sinon on renvoie -1
chevrons.forEach((chevron) => {
    chevron.addEventListener("click", (e) =>{
        const calcNextSlide = e.target.id === "next"? 1 : -1;
        const slideActive = document.querySelector(".active");

        newIndex = calcNextSlide + [ ...slides].indexOf(slideActive);
        
        if (newIndex < 0) newIndex = [...slides].length - 1;
        if (newIndex >= [...slides].length) newIndex = 0;

        slides[newIndex].classList.add("active");
        slideActive.classList.remove("active");
        
    })
})

//indexOf permet de savoir où se trouve tel élément dans un tableau, de la data