onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

//welcome message load in 
document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        const welcomeElements = document.querySelectorAll('.welcome');
        welcomeElements.forEach(element => {
            element.classList.add('visible');
        });
    }, 500);
});

//Start button fade in 
window.addEventListener('load', function() {
  setTimeout(() => {
      const elements = document.querySelectorAll('.startButton');
      elements.forEach(element => {
          element.classList.add('visible');
      });
  }, 5000); // Delay of 500ms
});

//User clicks begin button 
document.getElementById('button').addEventListener('click', function() {
  window.location.href = '../firstPage/pageOne.html';
});
