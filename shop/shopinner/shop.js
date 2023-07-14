
$(document).ready(function () {
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            $("header").addClass("site-header")
            $(".rs-navbar-b").css('display', 'none')
            $(".search").addClass("d-n")

        } else {
            $("header").removeClass("site-header")
            $(".rs-navbar-b").css('display', 'block')
            $(".search").removeClass("d-n")

        }
    });

    $(".toggle1").on("click", function () {
        $(".toggle1-perform").toggle()
    })
    $(".toggle2").on("click", function () {
        $(".toggle2-perform").toggle()
    })
    $(".toggle3").on("click", function () {
        $(".toggle3-perform").toggle()
    })
    $(".toggle4").on("click", function () {
        $(".toggle4-perform").toggle()
    })
    $(".toggle5").on("click", function () {
        $(".toggle5-perform").toggle()
    })
    $(".rp-bars-st").on("click", function () {
        $(".show-list").css("left", "0")
        $(".xmark").css("right", "0")
    })
    $(".xmark").on("click", function () {
        $(".show-list").css("left", "-100%")
    })



    function rederProducts(product) {
        let newProduct = product.map((item) => {
            let price = +item.price
            let del = +item.del
            const a = item.link || "./../../product/product.html"
            return (
                `
             <li class="product-item" data-id="${item.id}">
                                     <a href="${a}">
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
        .then(function (listproduct) {
            rederProducts(listproduct)
            $("#check").change(function () {
                if ($(this).val() === 'btn-price') {
                    rederProducts(
                        listproduct.sort((a, b) => {
                            return a.price - b.price
                        })
                    )
                } else if ($(this).val() === 'price-desc') {

                    rederProducts(
                        listproduct.sort((a, b) => {
                            return b.price - a.price
                        })
                    )
                } else {
                    rederProducts(
                        listproduct.sort((a, b) => {
                            return a.id - b.id

                        })
                    )

                }
            })
        })




    let show = 20
    $(".btn-show-products").on("click", function () {
        const products = $(".product-item")
        for (let i = show; i < show + 10 && i < products.length; i++) {
            products[i].style.display = 'block'
        }
        show += 10
        if (show >= products.length) {
            $(".btn-show-products").css("display", "none")
        }
    })

})