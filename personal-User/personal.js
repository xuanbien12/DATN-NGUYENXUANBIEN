$(document).ready(function () {
    var APIuser = "https://64a41a3cc3b509573b571155.mockapi.io/api/product/user"
    $(".show-set-pw").hide()
    $(".show-set-sdt").hide()
    const user = JSON.parse(localStorage.getItem("loginMain"))
    function render(user) {

        $(".personal-name").text(user.name)
        $(".personal-table-name").text(user.name)

        $(".personal-table-phone").text(user.phone)
        $(".personal-table-password").text(user.password)

    }
    render(user)

    function a() {
        fetch(APIuser)
            .then(function (respons) {
                return respons.json()
            })
            .then(function (users) {
                console.log("c", users)
                const check = users.find(item => item.id === user.id)
                console.log(check)
                localStorage.setItem("loginMain", JSON.stringify(check))
                // const user2 = JSON.parse(localStorage.getItem("loginMain"))
                render(check)
            })
    }

    $(".set-pw").on("click", function () {
        $(".show-set-pw").toggle()
        $(".show-set-sdt").hide()
    })
    $(".set-sdt").on("click", function () {
        $(".show-set-sdt").toggle()
        $(".show-set-pw").hide()
    })


    $(".get-i-pw").on('submit', function (e) {
        e.preventDefault()
        const password = $(".set-info-password").val()
        const NewPassword = $(".set-info-newpassword").val()

        const id = user.id
        if (password === user.password) {
            if (NewPassword.length >= 6) {
                const newUser = {
                    password: NewPassword
                }
                const options = {
                    method: "PUT",
                    body: JSON.stringify(newUser),
                    headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
                fetch(APIuser + "/" + id, options)
                alert("Thay đổi mật khẩu thành công")
                a()
                $(".show-set-pw").hide()
                $(".set-info-password").val("")
                $(".set-info-newpassword").val("")
            } else {
                alert("Mật khẩu phải 6 kí tự đổ lên")
            }
        }
        else {
            alert("Mật khẩu không chính xác")
        }


    })



    $(".get-i-sdt").on('submit', function (e) {
        e.preventDefault()
        const user = JSON.parse(localStorage.getItem("loginMain"))
        const phone = $(".set-info-phone").val()
        const newPhone = $(".set-info-newphone").val()

        const id = user.id
        if (phone === user.phone) {
            if (newPhone.length > 9 && newPhone.length < 11) {
                const newPhone1 = {
                    phone: newPhone
                }
                const options = {
                    method: "PUT",
                    body: JSON.stringify(newPhone1),
                    headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
                fetch(APIuser + "/" + id, options)
                alert("Thay đổi Số điện thoại  thành công")
                a()
                $(".show-set-sdt").hide()
                $(".set-info-phone").val("")
                $(".set-info-newphone").val("")
            } else {
                alert("Số điện thoại không hợp lệ (10 số)")
            }
        }
        else {
            alert("Số điện thoại không chính xác ")
        }


    })
})