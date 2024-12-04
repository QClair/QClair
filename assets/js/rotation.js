const imageContainer = document.querySelector('.image-container');

// Define rotation ranges and corresponding speeds
const rotationRanges = [
  { start: 0, end: 80, speed: 1 },  // 0 - 80 degrees, slow speed
  { start: 80, end: 100, speed: 1 },  // 80 - 100 degrees, fast speed
  { start: 100, end: 170, speed: 1 },  // 100 - 170 degrees, slow speed
  { start: 170, end: 190, speed: 1 },  // 170 - 190 degrees, fast speed
  { start: 190, end: 260, speed: 1 },  // 190 - 260 degrees, slow speed
  { start: 260, end: 280, speed: 1 },  // 260 - 280 degrees, fast speed
  { start: 280, end: 350, speed: 1 },  // 280 - 350 degrees, slow speed
  { start: 350, end: 360, speed: 1 },  // 350 - 360 degrees, fast speed
];

// Initialize rotation at 0 degrees
let currentRotation = 0;

// Function to update rotation speed based on the current rotation angle
function updateRotationSpeed() {
  // Find the current range for the rotation angle
  for (let i = 0; i < rotationRanges.length; i++) {
    const range = rotationRanges[i];
    // If current rotation is within the range, adjust speed
    if (currentRotation >= range.start && currentRotation < range.end) {
      const animationDuration = (range.speed * 2) + 's'; // Adjust speed dynamically
      imageContainer.style.animationDuration = animationDuration; // Update animation duration
      break; // Exit loop once we find the matching range
    }
  }
}

// Function to update rotation angle and apply the animation
function updateRotation() {
  currentRotation += 1; // Increment rotation angle

  if (currentRotation >= 360) {
    currentRotation = 0; // Reset rotation if 360 degrees is reached
  }

  updateRotationSpeed(); // Adjust speed based on the range
  imageContainer.style.transform = `rotateY(${currentRotation}deg)`; // Apply the new rotation
}

// Call updateRotation every frame (60fps)
setInterval(updateRotation, 16); // Update rotation at approximately 60fps
