document.addEventListener("DOMContentLoaded", () => {
    showAlert('This Website is still under development');
});


const menuButton = document.getElementById("mnBut");
const menuIcon = document.getElementById("menuIc");
const menuLay = document.querySelector(".menuLay");
const menuBox = document.querySelector(".me_nu");
const dynaCont = document.querySelector(".dynaCont");

const selectMenuLink = document.querySelector(".menuLists");
const contentLoading = document.getElementById('loadLay');



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

function openMenu() {
    menuButton.setAttribute("aria-expanded", "true");
    menuLay.style.display = "block"; // Ensure it's visible
    menuLay.classList.remove("closing");
    menuBox.classList.remove("closing");

    // Apply the change class to trigger the fading animation
    menuIc.classList.add("change");

    // Change icon to 'close' (Unicode) after fading effect
    setTimeout(() => {
        menuIc.innerHTML = "&#xe5cd";  // 'close' icon (Unicode)
        menuIc.classList.remove("change"); // Remove change class to stop animation
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
    menuIc.classList.add("change");

    // Change icon back to 'menu' (Unicode) after fading effect
    setTimeout(() => {
        menuIc.innerHTML = "&#xe5d2";  // 'menu' icon (Unicode)
        menuIc.classList.remove("change"); // Remove change class to stop animation
    }, 300); // Match the duration of the fade-in/out animation

    // Hide after animation ends
    menuBox.addEventListener("transitionend", () => {
        if (!menuBox.classList.contains("active")) {
            menuLay.style.display = "none";
        }
    }, { once: true }); // Runs only once to prevent conflicts
}


// SCROLLING FOR ANIMATION
// SCROLLING FOR ANIMATION
// SCROLLING FOR ANIMATION
// SCROLLING FOR ANIMATION

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-animation");

    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) { // 80% of viewport height
                el.classList.add("animate__fadeInUp");
                console.log("scr")
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load in case elements are already in view
});





// HANDLING MENU CLICKS
// HANDLING MENU CLICKS
// HANDLING MENU CLICKS
// HANDLING MENU CLICKS



function showAlert(message) {
      const overlay = document.getElementById('overlayerGrid');
      const alertText = document.getElementById('alertT');
      alertText.textContent = message;
      overlay.classList.add('active'); // Show the alert
      overlay.style.display = "block";
    }

function hideAlert() {
    const overlay = document.getElementById('overlayerGrid');
    overlay.classList.add('undo'); // Start hiding animation

    // Wait for the animation to finish before hiding the alert box
    setTimeout(() => {
        overlay.classList.remove("active", "undo");
        overlay.style.display = "none"; // Fully hide the element
    }, 500); // Matches CSS animation duration (0.5s)
}


 // Add event listener for the "Ok" button
    document.getElementById('ok').addEventListener('click', hideAlert);


function delay(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}


async function FetchDynaView(button) {
    console.log("started");
    try {
          
          contentLoading.style.display = 'flex';
          
          
          await delay(1000);
          
        let dynaVResponse = await fetch(dynaContUrl);
         if (dynaVResponse.status == "500") {
              showAlert('Server Error');
         }else if (dynaVResponse.status == "404") {
             showAlert('Page not found');
         } else if (!dynaVResponse.ok) {
              showAlert("Something went wrong");
              throw new Error(`HTTP Error: ${dynaVResponse.status}`);
        }

        let pageDisp = await dynaVResponse.text();
        
        dynaCont.innerHTML= pageDisp;
        
        window.scrollTo({ top: 0, behavior: "smooth" });

        } catch (error) {
        console.error("Something went wrong", error);
         if (!navigator.onLine) {
               console.error('ofline');
              showAlert('Check your connection and try again');
         }
        // Reset styles to the previous active button
        if (currentActiveButton) {
            button.classList.remove("clicked"); // Remove styles from the current button
            currentActiveButton.classList.add("clicked"); // Reapply styles to the previous button
        }
    } finally {
          contentLoading.style.display = 'none';
    }
}
        
        
        
        
        
        
        // HANDLING BUTTONS


document.addEventListener("DOMContentLoaded", () => {
    const buttons = selectMenuLink.querySelectorAll("li"); // Get all buttons

    // Set the default active button (hm1) and load its content
    const defaultButton = selectMenuLink.querySelector("li[data-value='mL1']");
    if (defaultButton) {
        defaultButton.classList.add("clicked");
        currentActiveButton = defaultButton;
        dynaContUrl = "https://alabiohio.github.io/LizzysUniquePalate/home.html";
        FetchDynaView(defaultButton);
    }

    // Handle button clicks
    selectMenuLink.addEventListener("click", (event) => {
        let button = event.target;

        // If not a button, find the closest button
        if (button.tagName !== "LI") {
            button = button.closest("li");
        }

        if (button && button.hasAttribute("data-value")) {
            // Clear styles for all buttons
            buttons.forEach(btn => {
                btn.classList.remove("clicked");
            });

            // Apply styles to the clicked button
            button.classList.add("clicked");
/*            public.style.borderBottom = "2px solid transparent";
            publicText.style.color = "dimgrey";
            publicText.style.fontWeight = "400";
*/
            const value = button.getAttribute("data-value");

            switch (value) {
                case "mL1":
                 console.log('mL1');
                    dynaContUrl = "https://alabiohio.github.io/LizzysUniquePalate/home.html"
                  FetchDynaView(button); // No scroll for default
                  closeMenu();
                    break;
                case "mL2":
                    dynaContUrl = "https://ohioalabi.github.io/Ohio/video.html";
                    FetchDynaView(button); // Scroll left
                    closeMenu();
                    break;
                case "mL3":
                   dynaContUrl = "https://ohioalabi.github.io/Ohio/audio.html";
                   FetchDynaView(button); // No scroll
                   closeMenu();
                   break;
                case "mL4":
                   dynaContUrl = "https://alabiohio.github.io/LizzysUniquePalate/home.html"
                   FetchDynaView(button); // No scroll
                   closeMenu();
                   break;
                default:
                    console.log("Unhandled button value:", value);
            }
        }
    });
});







