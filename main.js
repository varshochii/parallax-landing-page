

const images = document.querySelectorAll('.images img');

window.addEventListener('scroll', () => {

      images[0].style.top = "-" + (window.scrollY / 1.2) + "px";
      images[1].style.top = "-" + (window.scrollY / 3.5) + "px";
      images[2].style.top = "-" + (window.scrollY / 6) + "px";
      images[3].style.top = "-" + (window.scrollY / 7) + "px";
})