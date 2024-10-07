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

