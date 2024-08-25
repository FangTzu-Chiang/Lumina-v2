// Function to add 'show' class when elements are in view
function scrollAppear() {
    const elements = document.querySelectorAll('.scroll-effect');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;

        // Check if the element is in the viewport
        if (position < windowHeight - 100) {
            element.classList.add('show');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', scrollAppear);


    const navE1 = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 180) {
        navE1.classList.add('navbar-scolled');
      }
      else if (window.scrollY < 180) {
        navE1.classList.remove('navbar-scolled');
      }
    });