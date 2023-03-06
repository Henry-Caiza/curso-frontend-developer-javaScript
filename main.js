const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

mobileMenu.classList.remove('activo');

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
    closeProductDetailAside();
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('activo');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');


    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (isMobileMenuClosed) {
        mobileMenu.classList.remove('activo');
    }
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('activo');
}

function openProductDetailAside() {

    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Monitor',
    price: 220,
    image: 'https://topesdegama.com/app/uploads-topesdegama.com/2022/07/Monitores.jpg',
});
productList.push({
    name: 'Computador',
    price: 1000,
    image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/10/elige-mejor-monitor-cada-tipo-juego_1.jpg',
});
productList.push({
    name: 'Mouse',
    price: 40,
    image: 'https://i.pcmag.com/imagery/roundups/05UuGuaC1DeBtIUmi0vstl3-15..v1674505590.jpg',
});
productList.push({
    name: 'Audifonos',
    price: 150,
    image: 'https://m.media-amazon.com/images/I/81b2OMzqa6L._AC_UF894,1000_QL80_.jpg',
});
productList.push({
    name: 'Teclado',
    price: 130,
    image: 'https://hardzone.es/app/uploads-hardzone.es/2022/12/Newskill-Suiko-Ivory-Review.jpg?x=950&y=580',
});
productList.push({
    name: 'Mousepad',
    price: 45,
    image: 'https://i.ebayimg.com/images/g/8hsAAOSwzCBfHjLH/s-l1600.jpg',
});
productList.push({
    name: 'Disco Solido',
    price: 200,
    image: 'https://planetcompu.com/wp-content/uploads/2021/10/81.SSD-ADATA-120GB.jpg',
});
productList.push({
    name: 'Airpods',
    price: 90,
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202004/Airpods_connect_0.jpeg?size=690:388',
});
productList.push({
    name: 'Mando 360',
    price: 110,
    image: 'https://alfabetajuega.com/hero/2021/12/mejores-mandos-baratos-pc.jpg?width=768&aspect_ratio=16:9&format=nowebp',
});
productList.push({
    name: 'Ps5',
    price: 220,
    image: 'https://www.lavanguardia.com/files/article_gallery_microformat/uploads/2020/06/11/5fa919f32a1e3.jpeg',
});
productList.push({
    name: 'Computador',
    price: 1000,
    image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/10/elige-mejor-monitor-cada-tipo-juego_1.jpg',
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.append(productPrice, productName);
        // productInfoDiv.appendChild(productPrice);
        // productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
