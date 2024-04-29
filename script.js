// Certificate images data
const certificateImages = [
  "certificate1.png",
  "certificate2.png",
  "certificate3.png",
  "certificate4.png",
  "certificate5.png",
  "certificate6.png",
  "certificate7.png",
  "certificate8.png"
];

// Function to dynamically add certificate images
function addCertificateImages() {
  const certificateGallery = document.getElementById('certificate-gallery');
  certificateImages.forEach(image => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = 'Certificate';
      certificateGallery.appendChild(img);
  });
}

// Call the function to add certificate images when the page loads
window.onload = addCertificateImages;

// JavaScript to handle video playback
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    const videoWrapper = project.querySelector('.video-wrapper');
    const videoOverlay = project.querySelector('.video-overlay');
    const iframe = project.querySelector('iframe');

    videoOverlay.addEventListener('click', () => {
        const currentVideo = document.querySelector('.playing');
        if (currentVideo && currentVideo !== videoWrapper) {
            const currentIframe = currentVideo.querySelector('iframe');
            currentIframe.removeAttribute('src');
            currentVideo.classList.remove('playing');
            currentVideo.querySelector('.video-overlay').style.display = 'block';
        }
        
        if (!videoWrapper.classList.contains('playing')) {
            iframe.setAttribute('src', `https://www.youtube.com/embed/${project.dataset.videoId}`);
            videoWrapper.classList.add('playing');
            videoOverlay.style.display = 'none';
        }
    });

    iframe.addEventListener('mouseout', () => {
        iframe.removeAttribute('src');
        videoWrapper.classList.remove('playing');
        videoOverlay.style.display = 'block';
    });
});

