const btn = document.querySelector(".login-btn");
const test = document.querySelector("#test");
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

test.addEventListener("click", (e) => {
    console.log(document.documentElement.clientHeight);
});

// documentElement.clientHeight;
