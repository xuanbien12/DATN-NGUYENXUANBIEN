var APIProducts = "https://64a41a3cc3b509573b571155.mockapi.io/api/product/products"
$(".edit-product").hide()
const renderProduct = (product) => {
    const newproduct = product.map(product1 => {
        return `
        <tr class="style-td">
        <td>${product1.id}</td>
        <td>${product1.brand}</td>
        <td>${product1.name}</td>
        <td><img class="product-img" src="${product1.img}" alt=""></td>
        <td>${product1.price}</td>
        <td>${product1.del}</td>
        <td class="toolbars-user ">
        <span class="delete-user" onclick="handleDeleteProduct(${product1.id})" ><i class="fa-solid fa-trash" ></i></span>
        <span  class="edit" onclick="hendlEditProduct(${product1.id})"><i class="fa-solid fa-pen-to-square"></i></span>
        </td>
        </tr>
        `
    })
    $("#render-product").html(newproduct)
}
function start() {
    getProducs(renderProduct)
}
start()
function getProducs(callback) {
    fetch(APIProducts)
        .then(function (producs) {
            return producs.json()
        })
        .then(callback)
}


function handleDeleteProduct(id) {
    console.log(id)
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    fetch(APIProducts + "/" + id, options)

    getProducs(renderProduct)

}
function handleEdit(id) {
    const edit = document.querySelector("#form")
    edit.onsubmit = function (e) {
        e.preventDefault()
        const name = document.querySelector("input[name='name']").value
        const brand = document.querySelector("input[name='brand']").value
        const img = document.querySelector("input[name='img']").value
        const price = document.querySelector("input[name='price']").value
        const del = document.querySelector("input[name='del']").value
        const newproduct = {
            brand,
            img,
            name,
            del,
            price
        }
        const options = {
            method: "PUT",
            body: JSON.stringify(newproduct),
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
        fetch(APIProducts + "/" + id, options)
        $(".name-product").val("")
        $(".brand-product").val("")
        $(".img-product").val("")
        $(".price-product").val("")
        $(".del-product").val("")
        $(".st-show").hide()
        alert("Bạn đã thay đổi thông tin sản phẩm thành công")
        getProducs(renderProduct)
        $(".edit-product").hide()
    }

}

function hendlEditProduct(id) {

    getProducs(function (products) {
        const UserEdit = products.find(product => product.id == id)
        let productEdit =
            `
                    <form id="form">
                    <div class="form-inner">
                        <span>Name</span>
                        <input type="text" name="name" class="name-product  st-i" value="${UserEdit.name}" >
                    </div>
                    <div class="form-inner">
                        <span>Brand</span>
                        <input type="text" name="brand" class="brand-product st-i" value="${UserEdit.brand}">
                    </div>
                    <div class="form-inner">
                        <span>Image</span>
                        <input type="text" name="img" class="img-product st-i " value="${UserEdit.img}">
                    </div>
                    <div class="form-inner">
                        <span>Price <br> (1000đ)</span>
                        <div class="form-inner-i">
                            <input type="text" name="price" class="price-product st-i" value="${UserEdit.price}">
                            <span class="show-monney st-show">${(+UserEdit.price).toLocaleString()} đ</span>
                        </div>
                    </div>
                    <div class="form-inner">
                        <span>Price del <br>(1000đ)</span>
                        <div class="form-inner-i">
                            <input type="text" name="del" class="del-product st-i" value="${UserEdit.del}">
                            <span class="show-del st-show">${(+UserEdit.del).toLocaleString()} đ</span>
                        </div>
                    </div>
                    <button type="submit" onclick="handleEdit(${UserEdit.id})"  class="btn-edit-product"  data-id="${UserEdit.id} ">Submit</button>

                </form>

                    `
        $(".form-edit").html(productEdit)
        $(".edit-product").show()


    })
}


///

$(document).ready(function () {

    // $(".edit").on("click", function () {
    //     $(".edit-product").css("display", "flex")

    //     const id = $(this).data("id")
    //     const checkProduct = products.find((item) => item.id == id)


    //     $(".price-product").on("keyup", function () {
    //         const value = +$(this).val()
    //         $(".show-monney").text("=" + " " + value.toLocaleString() + " đ")
    //     })
    //     $(".del-product").on("keyup", function () {
    //         const value = +$(this).val()

    //         $(".show-del").text("=" + " " + value.toLocaleString() + " đ")
    //     })
    //     $(".name-product").on("keyup", function () {
    //         const value = $(this).val()
    //         $(".name-product").attr("value", value)
    //     })
    //     $(".brand-product").on("keyup", function () {
    //         const value = $(this).val()
    //         $(".brand-product").attr("value", value)
    //     })
    //     $(".img-product").on("keyup", function () {
    //         const value = $(this).val()
    //         $(".img-product").attr("value", value)
    //     })
    //     $(".price-product").on("keyup", function () {
    //         const value = $(this).val()
    //         $(".price-product").attr("value", value)
    //     })
    //     $(".del-product").on("keyup", function () {
    //         const value = $(this).val()
    //         $(".del-product").attr("value", value)
    //     })
    // })
    // $(".btn-edit-product").on("click", function () {
    //     console.log("aaa")
    // })

    // $("#form").on('submit', function (e) {
    //     e.preventDefault()
    //     console.log9
    //     const name = $(".name-product").val()
    //     const brand = $(".brand-product").val()
    //     const img = $(".img-product").val()
    //     const price = $(".price-product").val()
    //     const del = $(".del-product").val()
    //     console.log(name)
    //     console.log(brand)
    //     console.log(img)
    //     console.log(price)
    //     console.log(del)

    //     // const id = $(".btn-edit-product").data("id")
    //     // const results = products.map(item => {
    //     //     if (item.id == id) {
    //     //         item.name = name
    //     //         item.brand = brand
    //     //         item.img = img

    //     //         item.price = price
    //     //         item.del = del
    //     //     }
    //     //     return item
    //     // })

    //     // localStorage.setItem("productsAdmin", JSON.stringify(results))
    // })
    $(".admin , .user").on("click", function () {
        window.location.href = "./../admin.html"
    })
    $(".add-product").on("click", function () {
        window.location.href = "./../add-product/addproduct.html"
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
    $(".delete-user").on("click", function () {
        var products = JSON.parse(localStorage.getItem("productsAdmin") || "[]")
        const check = $(this).data("id")

        const newproduct = products.filter(product => product.id != check)
        renderProduct(newproduct)
        localStorage.setItem("productsAdmin", JSON.stringify(newproduct))
    })





    $(".btn-hide-edit").on("click", function () {
        $(".edit-product").hide()
    })

})





