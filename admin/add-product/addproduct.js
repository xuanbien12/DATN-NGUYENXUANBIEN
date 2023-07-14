var APIProducts = "https://64a41a3cc3b509573b571155.mockapi.io/api/product/products"
$(document).ready(function () {
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

    localStorage.setItem("id2", JSON.stringify(id1))
    $("#form").on('submit', function (e) {
        e.preventDefault()


        const name = $(".add-name").val()
        const brand = $(".add-brand").val()
        const img = $(".add-img").val()
        const price = $(".add-price").val()
        const del = $(".add-pricedel").val()
        const add = {
            brand, img, name, del, price
        }
        const options = {
            method: "POST",
            body: JSON.stringify(add),
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }

        console.log(APIProducts)
        // if (!name || !brand || !img || !price || !del) {
        //     alert("Bạn chưa nhập đủ thông tin")
        //     $(".notification").css("display", "none")
        //     return
        // }

        fetch(APIProducts, options)



        $(".add-name").val("")
        $(".add-brand").val("")
        $(".add-img").val("")
        $(".add-price").val("")
        $(".add-pricedel").val("")
        $(".notification").css("display", "block")
        $(".show-monney").text("=" + " " + 0 + "đ")
        $(".show-del").text("=" + " " + 0 + "đ")


    })
    $(".add-price").on("keyup", function () {
        const value = +$(this).val()
        $(".show-monney").text("=" + " " + value.toLocaleString() + "đ")
    })
    $(".add-pricedel").on("keyup", function () {
        const value = +$(this).val()

        $(".show-del").text("=" + " " + value.toLocaleString() + "đ")
    })

})