$(document).ready(function () {
    $(".next-login").on("click", function () {
        window.location.href = './../login/login.html'
    })
    const titlePage = $(".title-form").text()
    $(".title-login").text(titlePage)


    $(".show-password").hide()
    $(".form").on('submit', function (e) {
        e.preventDefault()
        const API = "https://64a41a3cc3b509573b571155.mockapi.io/api/product/user"
        fetch(API)
            .then(function (response) {
                return response.json()
            })
            .then(function (users) {
                const checkPassword = $(".check-password-user").val()

                const resultsCheck = users.find(user => user.phone === checkPassword)

                if (resultsCheck) {
                    $(".render-password").text(resultsCheck.password)
                    setTimeout(function () { $(".show-password").show() }, 1000);
                    return
                }
                $(".show-password").hide()
                $(".alert").show()
            })



    })
})

