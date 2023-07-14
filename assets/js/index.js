
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
    $(".rp-bars-st").on("click", function () {
        $(".show-list").css("left", "0")
        $(".xmark").css("right", "0")
    })
    $(".xmark").on("click", function () {
        $(".show-list").css("left", "-100%")
    })

    $(".st-user").on("click", function () {
        $(".setting").toggle();
    })

    const loginMain = JSON.parse(localStorage.getItem("loginMain") || "[]")
    const name = loginMain.name
    const sdt = loginMain.phone
    const permission = loginMain.permission
    $(".show-permission").hide()
    $(".show-user").html(name)
    if (permission === "admin") {
        $(".show-permission").show()
    }
    $(".set-logout").on("click", function () {
        localStorage.setItem("loginMain", JSON.stringify(""))
    })

    const checklength = $(".show-user").text()
    if (checklength <= 0) {
        $(".st-user").hide()
    }
    $(".feedback-input").on("keyup", function () {
        const value = $(this).val()
        $(this).attr("value", value)
    })
    $(".feedback-message").hide()
    $(".feedback-delete").on("click", function () {
        $(".feedback-message").hide()
        $(".feedback-img").show()
    })
    $(".feedback-img").on("click", function () {
        $(this).hide()
        $(".feedback-message").show()
    })
    const userFeedback = JSON.parse(localStorage.getItem('feedback') || '[]')
    function feedback() {
        const value = $(".feedback-input").attr("value")
        var d = new Date();
        var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        var date = d.toLocaleDateString()
        const comment = {
            text: value,
            date: date,
            time: time
        }
        const a = {
            name,
            sdt,
            message: [comment]
        }
        const check = userFeedback.find(item => item.name === name)
        if (check && value) {
            check.message.push(comment)
            renderFeedback(check)

        } else {
            userFeedback.push(a)
        }
        $(".feedback-input").val("")
        localStorage.setItem('feedback', JSON.stringify(userFeedback))
    }
    $(".send-message").on("click", function () {
        feedback()
    })
    $(".feedback-input").on("keypress", function (event) {
        const key = event.which
        if (key === 13) {
            feedback()
        }
    })


    const check1 = userFeedback.find(item => item.name === name)
    const renderFeedback = (item) => {
        const abc = item.message.map(item => {
            return (
                `
                    <span class="content-feedback">${item.text}<span class="time-feedback">${item.time}</span></span>
                    `
            )
        })
        $(".fback-inner").html(abc)

    }
    if (check1) {
        $(".fback-inner").addClass("feedback-st")
        renderFeedback(check1)
    }

})
