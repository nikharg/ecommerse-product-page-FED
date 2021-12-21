const iconClose = document.querySelector('#icon-close');
const hamIcon = document.querySelector('.ham-icon');
const menu = document.querySelector('.menu')

iconClose.addEventListener('click', closeMenu)
hamIcon.addEventListener('click', openMenu)

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function closeMenu(){
  menu.style.display='none'
}
function openMenu(){
  menu.style.display='block'
}