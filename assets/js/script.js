document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       DARK MODE
    ================================= */

    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeToggle) {
            themeToggle.innerHTML = "☀️";
        }

    } else {

        if (themeToggle) {
            themeToggle.innerHTML = "🌙";
        }

    }


    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                localStorage.setItem("theme", "dark");

                themeToggle.innerHTML = "☀️";

            } else {

                localStorage.setItem("theme", "light");

                themeToggle.innerHTML = "🌙";

            }

        });

    }


    /* ================================
       RTL / LTR
    ================================= */

    /* ================================
   RTL / LTR FULL DYNAMIC TOGGLE
================================= */
const rtlToggle = document.getElementById("rtlToggle");
const bootstrapLink = document.getElementById("bootstrap-css");

const BOOTSTRAP_LTR = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
const BOOTSTRAP_RTL = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css";

// 1. Function to apply direction
function setDirection(dir) {
    // Set dir attribute on <html>
    document.documentElement.setAttribute("dir", dir);

    // Swap Bootstrap CSS
    if (bootstrapLink) {
        bootstrapLink.setAttribute("href", dir === "rtl" ? BOOTSTRAP_RTL : BOOTSTRAP_LTR);
    }

    // Toggle helper class on body
    if (dir === "rtl") {
        document.body.classList.add("rtl-mode");
    } else {
        document.body.classList.remove("rtl-mode");
    }

    // Save preference
    localStorage.setItem("direction", dir);

    // Keep Icon
    if (rtlToggle) {
        rtlToggle.innerHTML = '<i class="fa-solid fa-arrows-left-right"></i>';
    }
}

// 2. Load saved direction on page start
const savedDirection = localStorage.getItem("direction") || "ltr";
setDirection(savedDirection);

// 3. Click Event Listener
if (rtlToggle) {
    rtlToggle.addEventListener("click", function () {
        const currentDirection = document.documentElement.getAttribute("dir") || "ltr";
        const newDirection = (currentDirection === "rtl") ? "ltr" : "rtl";
        setDirection(newDirection);
    });
}
});
