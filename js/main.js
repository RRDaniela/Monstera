/*--------------MOSTRAR MENÚ-------------------------*/
const navMenu = document.getElementById('nav-menu'), 
navToggle=document.getElementById('nav-toggle'), 
navClose=document.getElementById('nav-close');

//Mostrar menú.
//Si la constante existe..
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//Esconder menú
//Si la constante existe...
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

//Quitar menú
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu= document.getElementById('nav-menu')
    //Cuando se presione en nav_link quitamos la clase de show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n=>n.addEventListener('click', linkAction));

//Cambiar color del header
function scrollHeader(){
    const header = document.getElementById('header');
    //Cuando el scroll es mayor a vh 80 añadir la clase scroll-header al tag del header
    if(this.scrollY>=80)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);