const nav = document.querySelector('.nav-list')
const open = document.querySelector('.open');
const close = document.querySelector('.close')


//fungsi utk bar nav mobile
function handlerHamburger(){
    nav.classList.toggle('active')
    if(nav.classList.contains('active')){
        open.style.display = 'none'
        close.style.display = 'block'
    }else{
        open.style.display = 'block'
        close.style.display = 'none'
    }
}

//event listener utk bar nav mobile
open.addEventListener('click', handlerHamburger)
close.addEventListener('click', handlerHamburger)