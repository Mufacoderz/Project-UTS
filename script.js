const nav = document.querySelector('.nav-list')
const open = document.querySelector('.open');
const close = document.querySelector('.close')


//fungsi utk bar nav mobile
function handlerHamburger() {
    nav.classList.toggle('active')
    if (nav.classList.contains('active')) {
        open.style.display = 'none'
        close.style.display = 'block'
    } else {
        open.style.display = 'block'
        close.style.display = 'none'
    }
}

//event listener utk bar nav mobile
open.addEventListener('click', handlerHamburger)
close.addEventListener('click', handlerHamburger)


//fungsi utk render data json produks
function renderProducts(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = data.map(item => `
        <div class="product-card">
            <img src="${item.cover}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
            <button class="buy-btn">Beli Sekarang</button>
        </div>
    `).join("");
}

renderProducts(keyboards, "keyboard-list");
renderProducts(mouses, "mouse-list");
renderProducts(monitors, "monitor-list");
renderProducts(desks, "desk-list");