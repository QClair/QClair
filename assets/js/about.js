// Select all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Get the image element
const aboutImage = document.getElementById('about-image');

// Add event listener to each tab
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (event) => {
    // Get the data-image attribute value
    const newImageSrc = navLink.getAttribute('data-image');

    // Update the image src
    aboutImage.src = newImageSrc;
  });
});
