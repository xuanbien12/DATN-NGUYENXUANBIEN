$(document).ready(function () {
    $(".link-signup").on("click", function () {
        $(".form-sigup").css("display", "block")
        $(".form-login").css("display", "none")
        $(".title-login").text("Sign Up")
    })
    $(".link-login").on("click", function () {
        $(".form-sigup").css("display", "none")
        $(".form-login").css("display", "block")
        $(".title-login").text("Log In")

    })
    $(".alert-phone1").hide()

    const API = "https://64a41a3cc3b509573b571155.mockapi.io/api/product/user"
    // lấy các thông tin ng dùng đăng ký
    //    e.preventDefault()
    $(".form-sigup").on('submit', function (e) {
        e.preventDefault()

        // const login = JSON.parse(localStorage.getItem("login") || "[]")
        // const admin = JSON.parse(localStorage.getItem("admin") || "[]")
        const name1 = $(".get-name-sigup").val()
        const phone1 = $(".get-phonenumber-sigup").val()
        const password = $(".get-password-sigup").val()
        const password2 = $(".get-password2-sigup").val()
        const permission = "user"
        const user = {
            name: name1, phone: phone1, password, permission
        }
        const options = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }


        if (!name1 && !phone1 && !password && !password2) {
            $(".alert").show()

            return
        }
        if (phone1.length > 10 || phone1.length < 10) {
            $(".alert-phone1").show()
            $(".alert").hide()
            return
        }
        $(".alert-phone").hide()
        if (password != password2) {
            $(".alert-password").show()
            $(".alert").hide()
            return
        }
        fetch(API)
            .then(function (response) {
                return response.json()
            })
            .then(function (users) {
                const checkuser = users.find(user => user.name === name1 || user.phone == phone1)
                if (checkuser) {
                    $(".alert-already").show()
                } else {
                    fetch(API, options)
                    $(".notification").css("right", "0")
                    setTimeout(function () {
                        $(".notification").css("right", "-30%")
                        window.location.href = "./login.html"
                    }, 2000);
                    $(".get-name-sigup").val("")
                    $(".get-phonenumber-sigup").val("")
                    $(".get-password-sigup").val("")
                    $(".get-password2-sigup").val("")
                }

            })






        // const checkName = login.find((user) => user.name === name)
        // const checkAdminName = admin.find((user) => user.name === name)
        // const checkAdminPhone = admin.find((user) => user.phone1 === phoneNumber)

        // const checkPhone = login.find((user) => user.phoneNumber === phoneNumber)

        // if (checkName || checkAdminName) {
        //     $(".alert").hide()
        //     $(".alert-already").show()

        //     return

        // }
        // if (checkPhone || checkAdminPhone) {
        //     $(".alert-already").hide()
        //     $(".alert").hide()
        //     $(".alert-phone-exists").show()

        //     return
        // }
        // $(".alert-phone-exists").hide()
        // $(".alert-already").hide()
        // $(".alert-password").hide()
        // $(".alert-phone").hide()
        // $("alert-phone-exists").hide()
        // login.push(user)
        // localStorage.setItem("login", JSON.stringify(login))



    })




    // lấy các tài khoản xuống
    // const login = JSON.parse(localStorage.getItem("login") || "[]")
    // const admin = JSON.parse(localStorage.getItem("admin") || "[]")

    // const loginMain = [
    //     ...login,
    //     ...admin
    // ]
    // đăng nhập

    $(".form-login").on("submit", function (e) {
        e.preventDefault()
        const checkName = $(".check-name-login").val()
        const checkPassword = $('.check-password-login').val()
        if (!checkName || !checkPassword) {
            $(".alert").show()
            return
        }
        fetch(API)
            .then(function (response) {
                return response.json()
            })
            .then(function (users) {

                const check = users.find((user) => user.name === checkName && user.password === checkPassword || user.phone === checkName && user.password === checkPassword)
                if (check) {
                    localStorage.setItem("loginMain", JSON.stringify(check))
                    $(".notification-login").css("right", "0")
                    setTimeout(function () { $(".notification-login").css("right", "-30%") }, 2000);
                    setTimeout(function () { window.location.href = "./../../index.html" }, 2500);
                    $(".check-name-login").val("")
                    $('.check-password-login').val("")
                    return
                } else {
                    $(".alert-show").show()
                }

            })





    })
})