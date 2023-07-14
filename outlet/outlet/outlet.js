$(document).ready(function(){
    var productsInLocal = JSON.parse(localStorage.getItem('productsAdmin') || '[]')
    const newProductOutlet = productsInLocal.filter(product => product.brand !== "adidas" && product.brand !== "nike" && product.brand !=="asics")

    function rederProducts(product) {
        let newProduct = product.map((item) => {
            let price = +item.price
            let del = +item.del
            return(
                `
             <li class="product-item">
                                     <a href="${item.link}">
                                         <span class="brand">${item.brand}</span>
                                         <img class="product-item-img" src="${item.img}" alt="">
                                         <h2 class="product-item-title">${item.name}</h2>
                                         <span class="price">
                                             <del>${del.toLocaleString()} đ</del>
                                             <span class="price-product" data-price="${price}">${price.toLocaleString()} đ</span>
                                         </span>
                                         <div class="sale">sale</div>
                                     </a>
             </li>
             `
            )
        })
     $(".products").html(newProduct)
    }
    rederProducts(newProductOutlet)
})