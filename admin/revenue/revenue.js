const APIRevenue = "https://64a6bc59096b3f0fcc80762c.mockapi.io/pay"

function Render(order) {
    let totalPrice = 0
    let totalQuantity = 0
    let html = order.map(item => {
        totalPrice += +item.totalPrice
        let a = +item.totalPrice
        let quantityItem = 0
        return `
        <tr>
            <td class="id">${item.id}</td>
            <td>
                <h3 class="revenue-name x">Tên người đặt hàng : ${item.informationUser.name}</h3>
                <h4 class="revenue-phone x">Số điện thoại : ${item.informationUser.phone}</h4>
                <h4 class="time x" > Tháng : ${item.date.month} Năm: ${item.date.year}</h4>
                <h4 class"x"> Tài khoản đặt hàng : ${item.user}</h4>
            </td>
            <td>
                <ul class="revenue-list-product">
                 ${item.product.map(item2 => {
            totalQuantity += +item2.quantity
            quantityItem += +item2.quantity
            return `
                        <li class="z"><span class="za">${item2.name}</span><span>số lượng : <span
                         class="item-quantity">${item2.quantity}</span></span>
                         </li>
                         `
        })}
                </ul>
            </td>
            <td class="revenue-quantity">${quantityItem} </td>
            <td class="revenue-price">${a.toLocaleString()} đ</td>
    </tr>`
    })
    $(".revenue-total-quantity").text(totalQuantity)
    $("tbody").html(html)
    $(".revenue-total-price-m").text(totalPrice.toLocaleString())
}


fetch(APIRevenue)
    .then(function (repons) {
        return repons.json()
    })
    .then(function (listOrder) {
        Render(listOrder)
        function filterRender(month) {
            if (month >= 1 && month <= 12) {
                const newlistOrder = listOrder.filter((item) => item.date.month == month)
                Render(newlistOrder)
            }
            else {
                Render(listOrder)
            }

        }
        $(".filter").change(function () {
            filterRender($(this).val())
        })
    })





$(".admin , .user").on("click", function () {
    window.location.href = "./../admin.html"
})
$(".products").on("click", function () {
    window.location.href = "./../product/product.html"
})
$(".add-blog").on("click", function () {
    window.location.href = "./../add-blog/blog.html"
})
$(".feedback").on("click", function () {
    window.location.href = "./../feedback/feedback.html"
})
$(".revenue").on("click", function () {
    window.location.href = "./../revenue/revenue.html"
})