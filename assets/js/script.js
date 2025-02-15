'use strict'


/**
 * add event listener on multiple elements
 */

const addEventsOnElements = function (elements, eventType, callback){
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);

    }

}

/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");

}

addEventsOnElements(navTogglers,"click", toggleNavbar);



/**
 * Header
 * active header when qindows down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header.classList.add("active");

    } else {
        header.classList.remove("active");

    }
});

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]")

const reveal = function () {
    for (let i = 0, len = revealElements.length; i < len; i++){
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2){
            revealElements[i].classList.add("revealed");
        }
    }
}


for (let i = 0, len = revealDelayElements.length; i < len; i++) {
    revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);


/**
 * AUTO CLOSE IN PHONE MODE WHEN LINK MENU ITEM IS CLICKED 
 */

document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".navbar-link");
    const navbar = document.querySelector("[data-navbar]");
    const overlay = document.querySelector("[data-overlay]");
  
    navbarLinks.forEach(link => {
      link.addEventListener("click", () => {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("nav-active");
      });
    });
  });