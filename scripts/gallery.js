//const galleryImgs = document.querySelectorAll(".gImg");
const gMenuButton = document.getElementById("gMenuBt");
const gMenuButtonIc = document.getElementById("gSmenuIc");


    gMenuButton.addEventListener("click", () => {
    const expanded = gMenuButton.getAttribute("aria-expanded") === "true";
    
    gMenuButton.setAttribute("aria-expanded", expanded ? "false" : "true");
        if (expanded) {
            gSmenuIc.innerHTML = "&#xe5d2";
        } else {
                gSmenuIc.innerHTML = "&#xe5cd";
            }
        
});
    


// FOR DYNAMIC CONTENT
// FOR DYNAMIC CONTENT
// FOR DYNAMIC CONTENT
    document.addEventListener("DOMContentLoaded", function () {
    const imageGallery = document.getElementById("imageGallery");

    // Fetch images from JSON file
    fetch("https://alabiohio.github.io/LizzysUniquePalate/Files/fetches/imgs.json")
        .then(response => response.json())
        .then(images => {
            // Generate and append images
            const imageHTML = images.map(image => `
                <div class="cell small-12 medium-5 large-6 medium-offset-1 foodImg">
                    <img src="${image.src}" alt="${image.alt}" class="responsive-img lazyload gImg">
                </div>
            `).join('');

            imageGallery.innerHTML = imageHTML;

            // Initialize modal functionality
            initializeImageModal();
        })
        .catch(error => console.error("Error loading images:", error));
});

function initializeImageModal() {
    // Get all gallery images
    const images = document.querySelectorAll('.gImg');
    let currentIndex = 0;
    let carouselActive = false;
    let carouselInterval;

    function showImage(index) {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = images[index].src;
        currentIndex = index;
        $('#imageModal').foundation('open'); // Open Foundation modal
    }

    // Add click event listener to all images
    images.forEach((image, index) => {
        image.addEventListener('click', () => showImage(index));
    });

    // Next Image
    document.getElementById('nextImg').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Previous Image
    document.getElementById('prevImg').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Toggle Carousel (Auto-Advance)
    document.getElementById('toggleCarousel').addEventListener('click', function () {
        if (carouselActive) {
            clearInterval(carouselInterval);
            setTimeout(() =>{
                this.innerHTML = `<span class="material-symbols-outlined gMeCtrl" id="gMePlCtrl" aria-label="Slideshow">&#xe037</span>`;
            }, 300);
        } else {
            carouselInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            }, 4000);
            setTimeout(() => {
                this.innerHTML = `<span class="material-symbols-outlined gMeCtrl" id="gMePaCtrl" aria-label="Slideshow">&#xe034</span>`;
            }, 300);
        }
        carouselActive = !carouselActive;
    });

    // Stop the slideshow when modal closes
    $(document).on('closed.zf.reveal', '#imageModal', function() {
        clearInterval(carouselInterval);
        carouselActive = false;
        document.getElementById('toggleCarousel').innerHTML = `<span class="material-symbols-outlined gMeCtrl" id="gMePlCtrl" aria-label="Slideshow">&#xe037</span>`;
    });
}




