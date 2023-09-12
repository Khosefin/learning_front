let allProducts = [
    { id: 1, title: 'Album 1', price: 12.93, img: 'Images/Album 1.png' },
    { id: 2, title: 'Album 2', price: 21, img: 'Images/Album 2.png' },
    { id: 3, title: 'Album 3', price: 33, img: 'Images/Album 3.png' },
    { id: 4, title: 'Album 4', price: 41.98, img: 'Images/Album 4.png' },
    { id: 5, title: 'Coffee', price: 98, img: 'Images/Cofee.png' },
    { id: 6, title: 'Shirt', price: 65.33, img: 'Images/Shirt.png' },
]

let $ = document
const shopItemsContainer = $.querySelector('.shop-items')

allProducts.forEach(function (product) {
    let productContainer = $.createElement('div')
    productContainer.classList.add('shop-item')

    let productTitleSpan = $.createElement('span')
    productTitleSpan.classList.add('shop-item-title')
    productTitleSpan.innerHTML = product.title

    let productImageElem = $.createElement('img')
    productImageElem.classList.add('shop-item-image')
    productImageElem.setAttribute('src', product.img)

    let productDetailsContainer = $.createElement('div')
    productDetailsContainer.classList.add('shop-item-details')

    let productPriceSpan = $.createElement('span')
    productPriceSpan.innerHTML = product.price
    productPriceSpan.classList.add('shop-item-price')

    let prodcutAddButton = $.createElement('button')
    prodcutAddButton.innerHTML = 'ADD TO CART'
    prodcutAddButton.className = 'btn btn-primary shop-item-button'

    productDetailsContainer.append(productPriceSpan, prodcutAddButton)

    productContainer.append(productTitleSpan, productImageElem, productDetailsContainer)

    shopItemsContainer.append(productContainer)

})