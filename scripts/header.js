const menuButton = document.getElementById("mnBut");
const menuIcon = document.getElementById("menuIc");
const menuLay = document.querySelector(".menuLay");
const menuBox = document.querySelector(".me_nu");



if (menuButton) {
    menuButton.addEventListener("click", function () {
        const expanded = menuButton.getAttribute("aria-expanded") === "true";

        if (!expanded) {
            // Open Menu
            openMenu();
        } else {
            // Close Menu
            closeMenu();
        }

    });
    menuLay.addEventListener('click', closeMenu)
}

function openMenu() {
    menuButton.setAttribute("aria-expanded", "true");
    menuLay.style.display = "block"; // Ensure it's visible
    menuLay.classList.remove("closing");
    menuBox.classList.remove("closing");


    // Apply the change class to trigger the fading animation
    menuButton.classList.add("change");

    // Change icon to 'close' (Unicode) after fading effect
    setTimeout(() => {
        menuButton.innerHTML = `<i class="fas fa-close menu" id="menuIc"></i>`;  // 'close' icon (Unicode)
        menuButton.classList.remove("change"); // Remove change class to stop animation
    }, 300); // Match the duration of the fade-in/out animation

    // Add active class to play animations
    setTimeout(() => {
        menuLay.classList.add("active");
        menuBox.classList.add("active");
    }, 10); // Delay slightly for smooth effect
}

function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    menuLay.classList.remove("active");
    menuBox.classList.remove("active");
    menuLay.classList.add("closing");
    menuBox.classList.add("closing");

    // Apply the change class to trigger the fading animation
    menuButton.classList.add("change");

    // Change icon back to 'menu' (Unicode) after fading effect
    setTimeout(() => {
        menuButton.innerHTML = `<i class="fas fa-bars menu" id="menuIc"></i>`;  // 'menu' icon (Unicode)
        menuButton.classList.remove("change"); // Remove change class to stop animation
    }, 300); // Match the duration of the fade-in/out animation

    // Hide after animation ends
    menuBox.addEventListener("transitionend", () => {
        if (!menuBox.classList.contains("active")) {
            menuLay.style.display = "none";
        }
    }, { once: true }); // Runs only once to prevent conflicts
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



