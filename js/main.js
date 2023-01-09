const btn = document.querySelector(".logged");
const btnsList = document.querySelectorAll(".to-hide-test");

let collapsed = true;

btn.addEventListener("click", (e) => {
    collapsed = !collapsed;

    if (!collapsed) {
        btnsList.forEach((btn) => {
            btn.classList.add("dn");
        });
    } else {
        btnsList.forEach((btn) => {
            btn.classList.remove("dn");
        });
    }
});
