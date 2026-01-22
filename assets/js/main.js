// NAVBAR
fetch("assets/partials/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        const menuBtn = document.getElementById("menuBtn");
        const mobileMenu = document.getElementById("mobileMenu");
        const backdrop = document.getElementById("menuBackdrop");

        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            backdrop.classList.toggle("hidden");
        });

        backdrop.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            backdrop.classList.add("hidden");
        });
    });

// FOOTER
fetch("assets/partials/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });
