//const galleryImgs = document.querySelectorAll(".gImg");
const gMenuButton = document.getElementById("gMenuBt");
const gMenuButtonIc = document.getElementById("gSmenuIc");

if (gMenuButton) {
    gMenuButton.addEventListener("click", () => {
    const expanded = gMenuButton.getAttribute("aria-expanded") === "true";
    
    gMenuButton.setAttribute("aria-expanded", expanded ? "false" : "true");
        if (expanded) {
            gSmenuIc.innerHTML = "&#xe5d2";
        } else {
                gSmenuIc.innerHTML = "&#xe5cd";
            }
        
});
    
}

function delay(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// FOR DYNAMIC CONTENT
// FOR DYNAMIC CONTENT
// FOR DYNAMIC CONTENT
document.addEventListener("DOMContentLoaded", async function () {
  const imageGallery = document.getElementById("imageGallery");

await delay(2000);
  fetch("https://alabiohio.github.io/LizzysUniquePalate/Files/fetches/imgs.json")
    .then(response => response.json())
    .then(images => {
      // Generate and append images
      const imageHTML = images.map(image => `
        <div class="cell small-6 medium-4 large-3 foodImg">
          <a href="${image.src}" data-lightbox="gallery" data-title="${image.alt}">
            <img src="${image.src}" alt="${image.alt}" class="responsive-img lazyload gImg">
          </a>
        </div>
      `).join('');
      imageGallery.innerHTML = imageHTML;
        
    })
    .catch(error => {
      console.error("Error loading images:", error);
      spinner.stop();
    });
});


