const btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        console.log(e.currentTarget)
        const content = document.querySelectorAll(".card");

        content.forEach(function (allContent) {
            if (allContent.getAttribute("data-number") === btn.getAttribute("data-number")) {
                allContent.style.display = "block";
            } else {
                allContent.style.display = "none"
            }
        })
    })
});



