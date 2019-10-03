// alert('test');
let burger = document.getElementById('burger');

// console.log(burger.id.toUpperCase());

burger.addEventListener('click', onBurgerClick);

function onBurgerClick() {
    let navbar = document.querySelector('.navbar');
    // console.log(navbar); pour vérifier
    navbar.classList.toggle('toggle');
    
}


