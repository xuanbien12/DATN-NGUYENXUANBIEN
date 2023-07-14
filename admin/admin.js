var APIAdmin = "https://64a41a3cc3b509573b571155.mockapi.io/api/product/user"
function start() {
    getUser(renderUser)
}

start()

function getUser(callback) {
    fetch(APIAdmin)
        .then(function (user) {
            return user.json()
        })
        .then(callback)

}
function renderUser(users) {

    const admin = users.filter(user => user.permission == "admin")
    let stt = 0
    const user = users.filter(users => users.permission == "user")
    const newAdmin = admin.map(user => {

        return (` 

                 <tr class="style-td">
                    <td>${stt++}</td>
                    <td>${user.name}</td>
                    <td>${user.phone}</td>
                    <td>${user.password}</td>
                    <td>${user.permission}</td>
                    <td class="toolbars-user delete-user" title="${user.name}"><a href=""><i class="fa-solid fa-trash"></i></a></td>
                    </tr>

        `)
    })

    const Newuser = user.map(user => {

        return (` 

        <tr class="style-td remove-user-${user.id}">
           <td>${stt++}</td>
           <td>${user.name}</td>
           <td>${user.phone}</td>
           <td>${user.password}</td>
           <td>${user.permission}</td>
           <td class="toolbars-user delete-user""><i onclick="hendlenDeleteUser(${user.id})" class="fa-solid fa-trash"></i></td>
           </tr>

    `)

    })

    $("#admin").html(newAdmin)
    $("#render-user").html(Newuser)
}
hendlenDeleteUser = (id) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    fetch(APIAdmin + "/" + id, options)
        .then(function (response) {
            return response.json()
        })
        .then(function () {
            const deleteUser = document.querySelector(".remove-user-" + id)
            if (deleteUser) {
                deleteUser.remove()
            }

        })
}
$(document).ready(function () {

    // đưa admin lên quản lí
    // const admin = JSON.parse(localStorage.getItem("") || '[]')
    // const name = $(".admin-name").text()
    // const phoneNumber = $(".admin-phone").text()
    // const password = $(".admin-password").text()
    // const permission = $(".admin-permission").text()
    // const Newadmin = {
    //     name,
    //     phoneNumber,
    //     password,
    //     permission,
    // }
    // admin.push(Newadmin)
    // localStorage.setItem("admin", JSON.stringify(admin))  
    //  // render cac user ở local
    // const login = JSON.parse(localStorage.getItem("login") || "[]")

    $("#render-user").hide()









    $(".user").on("click", function () {
        $("#render-user").show()
        $("#admin").hide()
        $(this).addClass("bg")
        $(".admin").removeClass("bg")
    })
    $(".admin").on("click", function () {
        $("#render-user").hide()
        $("#admin").show()
        $(this).addClass("bg")
        $(".user").removeClass("bg")
    })
    // xoa user và render lại local



    $(".products").on('click', function () {
        window.location.href = './product/product.html'
    })
    $(".add-product").on('click', function () {
        window.location.href = './add-product/addproduct.html'
    })
    $(".add-blog").on('click', function () {
        window.location.href = './add-blog/blog.html'
    })
    $(".feedback").on('click', function () {
        window.location.href = './feedback/feedback.html'
    })
    $(".revenue").on('click', function () {
        window.location.href = './revenue/revenue.html'
    })
    // check xem có chưa nếu chưa có thì không thêm vô productAdmin để tránh bị mất cái mới add
    // const productss = JSON.parse(localStorage.getItem("products") || "[]")
    // const products = JSON.parse(localStorage.getItem("productsAdmin") || "[]")
    // const check = productss.find(product => {
    //     const id = product.id
    //     const check = products.find(product2 => product2.id === id)
    //     return check

    // })

    // if (check ){
    //     return

    // }else {
    //     localStorage.setItem("productsAdmin", JSON.stringify(productss))  
    // }


})