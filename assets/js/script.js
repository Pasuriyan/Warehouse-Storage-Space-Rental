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

    const rtlToggle = document.getElementById("rtlToggle");

    const savedDirection = localStorage.getItem("direction");

    if (savedDirection === "rtl") {

        document.documentElement.setAttribute("dir", "rtl");

        if (rtlToggle) {
            rtlToggle.innerHTML = "LTR";
        }

    } else {

        document.documentElement.setAttribute("dir", "ltr");

        if (rtlToggle) {
            rtlToggle.innerHTML = "RTL";
        }
    }


    if (rtlToggle) {

        rtlToggle.addEventListener("click", function () {

            const currentDirection =
                document.documentElement.getAttribute("dir");

            if (currentDirection === "rtl") {

                document.documentElement.setAttribute("dir", "ltr");

                localStorage.setItem("direction", "ltr");

                rtlToggle.innerHTML = "RTL";

            } else {

                document.documentElement.setAttribute("dir", "rtl");

                localStorage.setItem("direction", "rtl");

                rtlToggle.innerHTML = "LTR";
            }

        });
    }

});
