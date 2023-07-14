$(document).ready(function () {




    function rederProducts(product) {
        let newProduct = product.map((item) => {
            let price = +item.price
            let del = +item.del
            const a = item.link || "./../../product/product36.html"
            return (
                `
             <li class="product-item" data-id="${item.id}">
                                     <a href="${a}">
                                         <span class="brand">${item.brand}</span>
                                         <img class="product-item-img" src="${item.img}" alt="">
                                         <h2 class="product-item-title">${item.name}</h2>
                                         <span class="price">
                                             <del>${del.toLocaleString()}đ</del>
                                             <span class="price-product" data-price="${price}">${price.toLocaleString()}đ</span>
                                         </span>
                                         <div class="sale">sale</div>
                                     </a>
             </li>
             `
            )
        })
        $(".products").html(newProduct)
        $(".product-item").on("click", function () {

            const a = $(this).data("id")
            localStorage.setItem("id", JSON.stringify(a))
        })
    }
    var APIProducts = "https://64a41a3cc3b509573b571155.mockapi.io/api/product/products"
    fetch(APIProducts)
        .then(function (respon) {
            return respon.json()
        })
        .then(function (products) {
            const newProductsAsics = products.filter(item => item.brand == "asics")

            rederProducts(newProductsAsics)
            $("#check").change(function () {
                if ($(this).val() === 'btn-price') {
                    newProductsAsics.sort((a, b) => {
                        return a.price - b.price
                    })
                    rederProducts(newProductsAsics)
                } else if ($(this).val() === 'price-desc') {
                    newProductsAsics.sort((a, b) => {
                        return b.price - a.price
                    })
                    rederProducts(newProductsAsics)
                } else {
                    newProductsAsics.sort((a, b) => {
                        return a.id - b.id

                    })
                    rederProducts(newProductsAsics)

                }
            })

        })

})