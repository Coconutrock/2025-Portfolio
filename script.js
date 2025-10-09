"use strict";

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let autoRotateInterval;
let isPaused = false;
const autoRotateDelay = 5000; // Auto-rotate every 3 seconds
const pauseDuration = 3000; // Pause for 5 seconds after user interaction

// Function to move to next slide
function moveToNextSlide() {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
}

// Function to move to previous slide
function moveToPrevSlide() {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
}

// Start auto-rotation
function startAutoRotate() {
  autoRotateInterval = setInterval(moveToNextSlide, autoRotateDelay);
}

// Stop auto-rotation
function stopAutoRotate() {
  clearInterval(autoRotateInterval);
}

// Pause and resume auto-rotation after user interaction
function pauseAndResume() {
  if (isPaused) return;
  
  isPaused = true;
  stopAutoRotate();
  
  setTimeout(() => {
    isPaused = false;
    startAutoRotate();
  }, pauseDuration);
}

// Next button click handler
next.addEventListener("click", function () {
  moveToNextSlide();
  pauseAndResume();
});

// Previous button click handler
prev.addEventListener("click", function () {
  moveToPrevSlide();
  pauseAndResume();
});

// Start auto-rotation when page loads
startAutoRotate();