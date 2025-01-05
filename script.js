function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function showImage(imageSrc) {
    // Get the modal and image elements
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");

    // Set the image source to the modal
    modalImg.src = imageSrc;

    // Display the modal
    modal.style.display = "block";
  }

  function closeImage() {
    // Close the modal
    const modal = document.getElementById("image-modal");
    modal.style.display = "none";
  }
  window.addEventListener("load", () => {
    const profilePic = document.querySelector(".section__pic-container img");
    profilePic.classList.add("animate-spin");

    // Remove the spin animation after it completes
    setTimeout(() => {
      profilePic.classList.remove("animate-spin");
    }, 2000); // Match the duration of the spin animation
  });
  function showVideo(button, videoSrc) {
    const videoContainer = button.closest(".details-container").querySelector(".video-container");
  
    // Check if a video is already present; if so, remove it
    if (videoContainer.innerHTML) {
      videoContainer.innerHTML = "";
      return;
    }
  
    // Insert the video
    videoContainer.innerHTML = `
      <video controls class="project-video">
        <source src="${videoSrc}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  }
  function showVideo(button, videoSrc) {
    // Find the nearest video container
    const videoContainer = button.closest('.details-container').querySelector('.video-container');

    // Check if the video is already visible
    if (videoContainer.style.display === 'none' || !videoContainer.style.display) {
      // Show the video
      videoContainer.style.display = 'block';

      // Check if video element exists or create one dynamically
      let videoElement = videoContainer.querySelector('video');
      if (!videoElement) {
        videoElement = document.createElement('video');
        videoElement.src = videoSrc;
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.controls = true;

        // Append the video element to the container
        videoContainer.appendChild(videoElement);
      }
    } else {
      // Hide the video
      videoContainer.style.display = 'none';
    }
  }

  // Set all videos to display by default
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.video-container').forEach((container) => {
      container.style.display = 'block'; // Show videos by default
    });
  });

  