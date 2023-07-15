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
    console.log("a1")
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





    $('.slick-products').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: `<button type='button' class='slick-prev pull-left slick-arrow '><i class="fa-solid fa-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right slick-arrow '><i class="fa-solid fa-arrow-right"></i></button>`,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });
    $(".rp-bars-st").on("click", function () {
        $(".show-list").css("left", "0")
        $(".xmark").css("right", "0")
    })
    $(".xmark").on("click", function () {
        $(".show-list").css("left", "-100%")
    })




    // đưa dữ liệu lên localStorage lưu trữa


    const renderProduct = (a) => {
        const htmlid36 = `
        <div class="product-inf ">
                    <div class="inf-img">
                        <div class="inf-img-inner">
                            <img src="${a.img}" alt="">
                        </div>
                    </div>
                    <div class="summary ">
                        <div class="summary-inner">
                           <a class="link-product" href="./product.html"><h1 class="prodcut-title"> ${a.name}</h1></a> 
                            <div class="pr-price-main">
                                <p>
                                    <strong>Giá :</strong>
                                    <del>${a.del}₫</del>
                                    <span class="pr-price mg-l-1"> <span class="car-price">${a.price} </span><span>đ</span></span>
                                    
                                </p>

                            </div>
                            <p class="rs-pr" >
                                <strong>Mã SP : </strong>
                                #FY4080
                            </p>
                            <p class="rs-pr">
                                <strong>Hãng SX :</strong>
                                <a href="./../hang-san-xuat/${a.brand}/${a.brand}.html">${a.brand}</a>
                            </p>
                            <p class="rs-pr">
                                <strong>Tình Trạng :</strong>
                                còn hàng
                            </p>
                            <p class="rs-pr">
                                <strong>chọn size :</strong>
                                
                            </p>
                            <div class="cart">
                                <div class="cart-inner">
                                    <ul class="prodcut-size">
                                        <li class="active">37.5</li>
                                        <li class="active">38</li>
                                        <li class="active">38.5</li>
                                        <li class="active">39</li>
                                    </ul>
                                </div>
                                <div class="cart-iput">
                                    <label class="cart-number" for="">số lượng :</label>
                                    <div class="dl-fl">
                                        <input class="iput-nb" type="text" value="1" title="SL" >
                                        <span class="change-sl">
                                            <span class="up"><i class="fa-solid fa-caret-up "></i></span>
                                            <span class="down"><i class="fa-solid fa-caret-down " ></i></span>
                                           </span>
                                    </div>
                                </div>
                                <div class="rs-pr-contact">
                                    <h3>Hỗ trợ đặt hàng:</h3>
                                    <div class="rs-pr-contact-inner dl-fl">
                                        <div class="phones dl-fl">
                                            <span class="icon "><i class="fa-solid fa-mobile-screen-button"></i></span>
                                            <span>
                                                <span class="info">Biên : <a href="tel:0362953021">0326953021</a></span>
                                                <span class="info">Biên : <a href="tel:0362953021">0326953021</a></span>
                                            </span>
                                        </div>
                                        <div class="skypes">
                                            <span>
                                                <span class="info">Biên : <a href="tel:0362953021">0326953021</a></span>
                                                <span class="info">Biên : <a href="tel:0362953021">0326953021</a></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button class="add-to-cart" data-id="${a.id}">Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
    `
        const htmldesc = `
    <div class="container">
                    <div class="info-product-inner">
                        <h2 class="info-product-title">Thông tin sản phẩm </h2>

                        <p>
                            <a class="hv" href="./../hang-san-xuat/${a.brand}/${a.brand}.html">Giày thể thao ${a.brand}</a> ${a.name}, mã sản phẩm FY0306. Hoàn toàn yên tâm “Cân”
                            tất cả các hoạt động hàng ngày với đôi giày ${a.name} , đôi giày duy nhất mang lại
                            sự ổn định tuyệt đối và cảm giác thoải mái, vừa vặn không thể nhầm lẫn đi đâu được..
                        </p>
                        <p>
                            <a class="hv" href="./../hang-san-xuat/${a.brand}/${a.brand}.html">Giày thể thao ${a.brand}</a> ${a.name}, mã sản phẩm FY0306. Hoàn toàn yên tâm “Cân”
                            tất cả các hoạt động hàng ngày với đôi giày ${a.name} , đôi giày duy nhất mang lại
                            sự ổn định tuyệt đối và cảm giác thoải mái, vừa vặn không thể nhầm lẫn đi đâu được..
                        </p>
                        <p> <b class="headline-b">CÔNG NGHỆ NỔI BẬT: </b></p>
                        <p>${a.brand}</p>
                        <p>Công nghệ Torsion System mới giúp độ chịu uốn của mũi giày tăng thêm 15%, cho sải bước thêm
                            đàn hồi.</p>
                        <p>HOÀN TRẢ NĂNG LƯỢNG TUYỆT VỜI</p>
                        <p>6% hạt Boost tăng cường sẵn sàng bùng nổ năng lượng trong từng bước chân.</p>
                        <p>PRIMEBLUE</p>
                        <p>Sản phẩm này may bằng vải công nghệ Primeblue, chất liệu tái chế hiệu năng cao có sử dụng sợi
                            Parley Ocean Plastic. 50% thân giày làm bằng vải dệt, 75% vải dệt bằng sợi Primeblue. Không
                            sử dụng polyester nguyên sinh.</p>

                        
                    </div>
                </div>
    `
        $(".zaq").html(htmlid36)
        $(".info-product").html(htmldesc)
        if (!a.listImg) {
            $(".wp-caption").hide()
        } else {
            const img = `
            <div class="wp-caption-inner">
                <img src="${a.listImg.img1}" alt="">
                <p class="wp-caption-text">${a.name} (1)
                </p>
           </div>
           <div class="wp-caption-inner">
                <img src="${a.listImg.img2}" alt="">
                <p class="wp-caption-text">${a.name} (1)
                
                </p>
           </div>
           <div class="wp-caption-inner">
                <img src="${a.listImg.img3}" alt="">
                <p class="wp-caption-text">${a.name} (1)
                </p>
           </div>
           <div class="wp-caption-inner">
                <img src="${a.listImg.img4}" alt="">
                <p class="wp-caption-text">${a.name} (1)
                </p>
           </div>
`
            $(".wp-caption").html(img)
        }
        $(".active").on("click", function () {
            $(".active").each(function (index) {
                $(this).removeClass("bg-active")
            })
            $(this).addClass("bg-active")
        })


    }


    const productid = JSON.parse(localStorage.getItem("id"))
    var API = "https://64a41a3cc3b509573b571155.mockapi.io/api/product/products"
    fetch(API)
        .then(function (respon) {
            return respon.json()
        })
        .then(function (product) {

            const Newproduct = product.find(item => item.id == productid)

            renderProduct(Newproduct)

            $(".down").on("click", function () {
                const counter = $(".iput-nb").attr("value")
                let newcounter = (+counter) - 1
                if (newcounter >= 1) {

                    $(".iput-nb").attr("value", newcounter)
                }

            })
            const textProduct = $(".prodcut-title").text()

            $(".name-tab").text(textProduct)

            $(".up").on("click", function () {
                const counter = $(".iput-nb").attr("value")
                let newcounter = (+counter) + 1
                $(".iput-nb").attr("value", newcounter)


            })
            $(".active").on("click", function () {
                $(".active").css("backgroud", "black")

            })
            $(".add-to-cart").on("click", function () {
                var cart = JSON.parse(localStorage.getItem('cart') || '[]')

                const id = $(this).data("id")
                const productToCart = product.find(item => item.id == id)
                const size = $(".active.bg-active").text()
                const quantity = $(".iput-nb").attr("value")
                const newquantity = +quantity
                if (size) {
                    const sp = {
                        ...productToCart,
                        quantity: newquantity,
                        size

                    }

                    const prodcutSize = $(".active.bg-active").text()
                    const carts = cart.find((item) => item.id == id && item.size == prodcutSize)

                    if (carts) {
                        carts.quantity = +quantity + +(carts.quantity)
                    } else {
                        cart.push(sp)
                    }
                    const checkUser = $(".show-user").text()
                    if (checkUser) {
                        localStorage.setItem("cart", JSON.stringify(cart))
                        window.location.href = "./../cart/cart.html"
                    } else {
                        setTimeout(function () {
                            window.location.href = "./../login/login/login.html"
                        }, 2000)
                        alert("Bạn cần đăng nhập tài khoản !! ")
                    }


                } else {
                    alert("vui lòng chọn size ")
                }

                // const numberQuantity = $(".iput-nb").attr("value")
                // const productId = $(this).data('id');



            })


        })






})
