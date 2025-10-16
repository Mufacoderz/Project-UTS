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
        <img src="${item.image}" alt="${item.name}" width="150">
        <h3>${item.name}</h3>
        <p>Rp ${item.price.toLocaleString('id-ID')}</p>
        <div>
            <button class="cart-btn">Add to Cart  <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    </div>
    `).join("");
}

renderProducts(keyboards, "keyboard-list");
renderProducts(mouses, "mouse-list");
renderProducts(monitors, "monitor-list");
renderProducts(desks, "desk-list");