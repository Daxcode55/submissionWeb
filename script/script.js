// navbar responsive
let navbar = document.querySelector('.container-navbar');
document.querySelector('#btn-menu').onclick = () => {
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    navbar.classList.remove("active");
}


// slide 
let slideIndex = 1;
showslide(slideIndex);

let tombolNext = document.querySelector('#btnNext');
tombolNext.addEventListener('click', () => {
    showslide(slideIndex += 1);
    if (slideIndex > 4) {slideIndex = 1};
})

let tombolKembali = document.querySelector('#btnPrev');
tombolKembali.addEventListener('click', () => {
    showslide(slideIndex -= 1);
    if (slideIndex < 1) {slideIndex = 4};
})


function showslide(m) {
    let cardSlides = document.querySelectorAll(".cardSlide");
    if (m > cardSlides.length) { m = 1 };
    if (m < 1) {m = cardSlides.length}
    cardSlides.forEach((n, index) => {
        n.style.display = "none";
        if (index === m-1) {
            n.style.display = "block";
            console.log(n)
        }
    })
}




