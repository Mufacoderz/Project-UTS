const btn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('.nav-list')

btn.addEventListener('click', ()=>{
    nav.classList.toggle('active')

    if(nav.classList.contains('active')){
        btn.style.display = 'none'
    }else{
        btn.style.display = 'block'
    }
})