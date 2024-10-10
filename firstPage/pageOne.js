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

//onclick the star, hide the "click the star"