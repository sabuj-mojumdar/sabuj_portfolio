window.addEventListener("scroll", function () {
    let navArea = document.getElementById("navArea");

    if (window.pageYOffset > 0) {
        navArea.classList.add("is-sticky");
    } else {
        navArea.classList.remove("is-sticky");
    }
});

var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}