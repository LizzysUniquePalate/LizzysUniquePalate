const lgMemenuLay = document.querySelector(".lgScrMunuCont");
const selectMenuLink = document.querySelector(".menuLists");
const contentLoading = document.getElementById('loadLay');


// HANDLING MENU CLICKS
// HANDLING MENU CLICKS
function showAlert(message) {
      const overlay = document.getElementById('overlayerGrid');
      const alertText = document.getElementById('alertT');
    if(alertText) {
      alertText.textContent = message;
      overlay.classList.add('active'); // Show the alert
      overlay.style.display = "block";
    }
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
    const okB = document.getElementById('ok')
if(okB) {
okB.addEventListener('click', hideAlert);
}



