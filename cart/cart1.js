var productsInCart = JSON.parse(localStorage.getItem('cart') || '[]')

const APIpay = "https://64a6bc59096b3f0fcc80762c.mockapi.io/pay"

// $(document).ready(function () {



renderProduct(productsInCart)

$(".btn-delete").on("click", function () {
    const productId = $(this).data('id')
    productsInCart = productsInCart.filter((item) => item.id != productId)
    renderProduct(productsInCart)
    localStorage.setItem('cart', JSON.stringify(productsInCart))

})


// lấy dữ liệu từ localStorage 


function totalPriceCart(item) {
    let totalPrice = 0;
    item.forEach(item => {
        totalPrice += +item.price * item.quantity
    })
    $(".totals-price").text(totalPrice.toLocaleString())
    $(".pay-total").text(totalPrice.toLocaleString())
    $(".pay-total").attr("title", totalPrice)
}
totalPriceCart(productsInCart)

// $(".cart-number").on("keyup", function () {

//     let number = $(this).val()
//     let productId = $(this).data("id")
//     const carts = productsInCart.find((item) => item.id == productId)
//     carts.quantity = number

//     renderProduct(productsInCart)
//     totalPriceCart(productsInCart)
//     localStorage.setItem('cart', JSON.stringify(productsInCart))


// })
function renderProduct(item) {

    let totalPrice = 0;
    let html = item.map((item) => {
        let price = +item.price
        let quantitys = item.quantity
        totalPrice = price * quantitys;

        return `
        <tr>
        <td class="product-remove"><a href="" data-id="${item.id}" class ="btn-delete">x</a></td>
        <td class="product-thumbnail">
            <img style="width: 32px; height: 32px;" src="${item.img}" alt="">
        </td>
        <td class="product-name">
            <a href="./../product/product${item.id}.html">${item.name}</a>
            <p>Size: ${item.size}</p>
        </td>
        <td class="product-price"><span> <span class="price-c">${price}</span><span> đ</span></span></td>
        <td class="product-quantity"><input data-id="${item.id}" class="cart-number" type="text" value="${item.quantity}"> 
            <span class="change-sl">
                <span  class="up" onclick="onClickUp(${item.id},${item.size})" ><i class="fa-solid fa-caret-up "></i></span>
                <span  class="down" onclick="onClickDown(${item.id},${item.size})" ><i class="fa-solid fa-caret-down " ></i></span>
            </span>
       </td>
        <td class="product-subtotal"><span class="total-price">${totalPrice.toLocaleString()}</span><span> đ</span></td>
        </tr>`;
    })
    $("#myCart").html(html)

}

function onClickUp(id, size) {
    const newElement = productsInCart.filter(item => {
        if (item.id == id && item.size == size) {
            ++item.quantity
        }
        return item
    })
    renderProduct(newElement)
    totalPriceCart(newElement)

    // localStorage.setItem('cart', JSON.stringify(productsInCart))
    // setTimeout(function () {
    //     window.location.href = "./cart.html"
    // }, 1000)
    localStorage.setItem('cart', JSON.stringify(newElement))
}
function onClickDown(id, size) {
    const newElement = productsInCart.filter(item => {
        if (item.id == id && item.size == size) {
            --item.quantity
        }
        return item
    })
    renderProduct(newElement)
    totalPriceCart(newElement)
    localStorage.setItem('cart', JSON.stringify(newElement))

}
$(".pay").hide()
$(".checkout-btn").on("click", function (e) {
    e.preventDefault()
    const car = JSON.parse(localStorage.getItem(("cart") || []))
    let newHtml = car.map(item => {
        return `
        <li class="pay-iem">
        <h5>${item.name}</h5>
        <span class="pay-item-quantity">Số lượng 
            <span class="pay-quantity">${item.quantity}</span>
        </span>
        </li>
        
        `
    })
    $(".pay-products").html(newHtml)
    $(".pay").show()
})
// 
$(".get-info-pay").on("submit", function (e) {
    e.preventDefault()

    const user = JSON.parse(localStorage.getItem(("loginMain") || []))
    const cart = JSON.parse(localStorage.getItem(("cart") || []))
    const name = $(".pay-name").val()
    const address = $(".pay-address").val()
    const phone = $(".pay-phone").val()
    const email = $(".pay-email").val()
    const not = $("textarea").val()
    if (!name || !address || !phone || !not) {
        alert("vui lòng nhập đủ thông tin ")
        return
    }
    var d = new Date()
    const thang = d.getMonth() + 1
    const nam = d.getFullYear()
    let totalPrice = $(".pay-total").attr("title")
    const pay = {
        user: user.name,
        totalPrice,
        informationUser: {
            name, address, phone, email, not,
        },
        date: {
            month: thang,
            year: nam
        },
        product: cart
    }
    const options = {
        method: "POST",
        body: JSON.stringify(pay),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }
    fetch(APIpay, options)


    alert("Bạn đã đặt hàng thành công")
    $(".pay-name").val("")
    $(".pay-address").val("")
    $(".pay-phone").val("")
    $(".pay-email").val("")
    $("textarea").val("")
    $(".pay").hide()
    localStorage.setItem('cart', JSON.stringify([]))
    window.location.href = "./cart.html"

})
$(".az").on("click", function () {
    $(".pay").hide()
})

// $(".cart-number").change(function () {
//     console.log("change", $(this).val())
// })

// // tính tiền khi user nhập số lượng
// $(".cart-number").on("keyup", function () {
//     const quantity = $(this).val()
//     console.log("change", $(this).val())
//     const id = $(this).data("id")
//     const newElement = productsInCart.filter(item => {
//         if (item.id == id) {
//             item.quantity = +quantity
//         }
//         return item
//     })
//     renderProduct(newElement)
//     totalPriceCart(newElement)
//     localStorage.setItem('cart', JSON.stringify(newElement))
// })



// Tính tổng số hàng trong cart
// function totalPriceCart(item) {
//     let totalPrice = 0
//     item.foEach(function (index, elemet) {

//         const a = $(index).text().replace(/,/g, '');
//         totalPrice += +a
//     })
//     $(".totals-price").text(totalPrice.toLocaleString())
// }

// totalPriceCart(productsInCart)


// tính độ dài của cart
var lengthCart = $("#myCart tr")

if (lengthCart.length >= 1) {
    $(".content-area-inner").hide()
    $(".shop-table").show()
    $(".cart_totals").show()
} else {
    $(".content-area-inner").show()
    $(".shop-table").hide()
    $(".cart_totals").hide()

}



// })