

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.screenY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
      });
    };
  });
};



function contactMe() {
  alert("Because of the pressure of study, I'm unavailable till - April 2025.")
}
function faqFunc() {
  alert("FAQ unavailable to filter till - April 2025.")
}