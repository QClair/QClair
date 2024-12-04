

const imageContainer = document.querySelector('.image-container');

// Define visibility ranges
const visibilityRanges = [
  { start: 80, end: 100 },   // Invisible between 80-100 degrees
  { start: 170, end: 190 },  // Invisible between 170-190 degrees
  { start: 260, end: 280 },  // Invisible between 260-280 degrees
  { start: 350, end: 360 },  // Invisible between 350-360 degrees
];

const rotationSpeed = 5; // Degrees per frame
const frameInterval = 10; // Interval in milliseconds

// Retrieve the last rotation angle from localStorage, or initialize it to 0
let currentRotation = parseFloat(localStorage.getItem('currentRotation')) || 0;

// Function to check if the current angle is in an invisible range
function isInvisible(angle) {
  for (let range of visibilityRanges) {
    if (angle >= range.start && angle < range.end) {
      return true; // Angle is in an invisible range
    }
  }
  return false; // Angle is visible
}

// Function to update rotation and visibility
function updateRotation() {
  currentRotation += rotationSpeed; // Increment rotation angle by rotationSpeed

  if (currentRotation >= 360) {
    currentRotation = 0; // Reset rotation if 360 degrees is reached
  }

  // Save the current rotation in localStorage
  localStorage.setItem('currentRotation', currentRotation);

  // Check if the current rotation angle is in an invisible range
  if (isInvisible(currentRotation)) {
    imageContainer.style.opacity = 0; // Hide the image
  } else {
    imageContainer.style.opacity = 0.25; // Show the image
  }

  // Apply the rotation
  imageContainer.style.transform = `rotateY(${currentRotation}deg)`;
}

// Call updateRotation at the specified interval
setInterval(updateRotation, frameInterval); // Faster updates for smoother animation
