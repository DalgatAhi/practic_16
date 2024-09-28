

const block3 = document.getElementById('block3');
const phonePopup = document.getElementById('phone-popup');


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
    
      phonePopup.style.display = 'block';
    } else {
    
      phonePopup.style.display = 'none';
    }
  });
}, {
  threshold: [0.5] 
});


observer.observe(block3);
