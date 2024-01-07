// Navigation bar slide-down animation

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("header");
    const hero = document.querySelector("#hero-section");
  
    const heroHeight = hero.clientHeight;
  
    window.addEventListener("scroll", function () {
      if (window.scrollY >= heroHeight/3) {
        navbar.classList.add("fixed");
      } else {
        navbar.classList.remove("fixed");
      }
    });
});

// Modal Popup

$(document).ready(function(){
  $("#supportButton").click(function(){
    $("#contactModal").modal('show');
  });
});

$(document).ready(function(){
  var contactModal = $('#contactModal');

  contactModal.modal({
    backdrop: 'static',
    keyboard: false,
    show: false
  });

  $('.btn-close').click(function(){
    contactModal.modal('hide');
  });

  contactModal.on('hidden.bs.modal', function () {
    $('.modal-backdrop').remove();
  });
});

// Support button when navigation bar is scrolled

var supportButton = document.querySelector('#supportButton');
var heroSection = document.querySelector('#hero-section');

// Save the original button properties
var originalText = supportButton.textContent;
var originalClass = supportButton.className;

// Save the original click event
var originalClickEvent = supportButton.onclick;

// Calculate 1/3rd of the hero section's height
var scrollLimit = heroSection.offsetHeight / 3;

window.addEventListener('scroll', function() {
  if (window.pageYOffset > scrollLimit) {

    // Change the button properties
    supportButton.textContent = 'Notify me';
    supportButton.className = 'btn notify-btn';

    // Change the button click event
    supportButton.onclick = function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  } else {

    // Revert the button properties
    supportButton.textContent = originalText;
    supportButton.className = originalClass;

    // Revert the button click event
    supportButton.onclick = originalClickEvent;
  }
});