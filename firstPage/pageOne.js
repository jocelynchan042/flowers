onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  //start transition 
  document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        const welcomeElements = document.querySelectorAll('.start');
        welcomeElements.forEach(element => {
            element.classList.add('visible');
        });
    }, 500);
});

document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
      const welcomeElements = document.querySelectorAll('.button img');
      welcomeElements.forEach(element => {
          element.classList.add('visible');
      });
  }, 1000);
});

//onclick the star, delete the "click the star"
const button = document.querySelector('.button');
const heading = document.querySelector('.start h1');
const buttonImage = document.querySelector('.button img');

button.addEventListener('click', () => {
  // Hide the initial elements
  heading.classList.add('hidden');
  buttonImage.classList.add('hidden');
  
  // Show and start the animation
  setTimeout(() => {
      animationContainer.classList.add('show');
      line.classList.add('animate');
      star.classList.add('animate');
  }, 500); // Start after the fade-out of previous elements
  
  // Optional: completely remove initial elements after fade
  setTimeout(() => {
      heading.style.display = 'none';
      buttonImage.style.display = 'none';
  }, 500);
});
const animationContainer = document.querySelector('.line-animation-container');
const line = document.querySelector('.dropping-line');
const star = document.querySelector('.animated-star');