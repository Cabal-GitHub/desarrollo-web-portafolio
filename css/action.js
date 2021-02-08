const  menu = document.querySelector('.menu');
// console.log(menu)
const burgerbutton = document.querySelector('#burger-menu');

function hideShow(){
    if(menu.classList.contains('is-active'))
    {
        menu.classList.remove('is-active');
    }  else 
    {
        menu.classList.add('is-active');
    }
}
const ipad = window.matchMedia('screen and (max-width: 767px')
ipad.addListener(validation)
function validation (event){
    if (event.matches) {
        burgerbutton.addEventListener('click', hideShow)
    } else {
        burgerbutton.removeEventListener('click', hideShow)
    }
}
validation(ipad)