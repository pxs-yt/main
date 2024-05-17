// Get the loader element
const loader = document.querySelector(".loader");

// Generate a random delay between 3 and 4 seconds
const delay = Math.floor(Math.random() * 1000) + 3000; // Range: 3000ms to 3999ms

// Function to hide the loader after the delay
function hideLoader() {
  loader.style.display = "none";
}

// Set a timeout to hide the loader after the delay
setTimeout(hideLoader, delay);
