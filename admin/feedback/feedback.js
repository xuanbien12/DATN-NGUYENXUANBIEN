$(document).ready(function () {
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
        $(".add-product").on("click", function () {
            window.location.href = "./../add-product/addproduct.html"
        })
        $(".revenue").on("click", function () {
            window.location.href = "./../revenue/revenue.html"
        })
    })

    const feedback = JSON.parse(localStorage.getItem("feedback"))


    const renderFeeback = (user) => {


        const newUser = user.map(user => {
            const newMessage = user.message.filter((item, index) => {
                if (index >= user.message.length - 2) {
                    return item
                }

            })
            return `
            <tr>
            <td>
                <ul>
                    <li class="ab"><span>${user.name}</span> - <span>${user.sdt}</span></li>
                    <li>số lần phản hồi (${user.message.length})</li>
                </ul>
            </td>
            <td class="azz">
                ${newMessage.map((item) => {
                return `
                    <span class="dl-fl"> 
                            <span class="bz">${item.text}</span> 
                            <span> ngày : ${item.date} <span>Giờ :${item.time}</span></span>
                            
                        </span>
                    `
            })}
               <a class="azz-abl" data-id="${user.sdt}" >Xem thêm</a>
            </td>
            <td>Chưa được xử lí <a href="" class="delete-feedback" data-id="${user.name}"><i class="fa-solid fa-trash" ></i></a> </td>
            </tr>
            `
        })

        $("#show-feedback").html(newUser)
    }

    $(".show-all-message").hide()
    renderFeeback(feedback)
    $(".delete-feedback").on("click", function (e) {
        const name = $(this).data("id")
        const newFeedback = feedback.filter(item => item.name != name)
        renderFeeback(newFeedback)
        localStorage.setItem('feedback', JSON.stringify(newFeedback))

    })
    $(".azz-abl").on("click", function () {
        const id = $(this).data("id")
        const showaAll = feedback.find(user => user.sdt == id)
        const aa = [showaAll]
        const newShowAll = aa.map(item => {
            return item.message.map(item2 => {
                return `
                <span class="dl-fl pi"> <span class="po">${item2.text}</span> <span> ngày : ${item2.date} <span>Giờ :${item2.time}</span></span></span>
                `
            })
        })
        $(".message-inner").html(newShowAll)
        $(".show-all-message").show()
    })

    $(".hide-show-all").on("click", function () {
        $(".show-all-message").hide()
    })


})