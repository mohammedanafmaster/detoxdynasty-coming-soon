// Progress Bar

document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.querySelector("#progress-bar");

  window.addEventListener("scroll", function () {
    const max = document.body.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / max) * 100;
    progressBar.style.width = progress + "%";
  });
});

// Navigation bar slide-down animation

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("header");
  const hero = document.querySelector("#hero-section");

  const heroHeight = hero.clientHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= heroHeight / 3) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });
});

// Modal Popup

$(document).ready(function () {
  $("#supportButton").click(function () {
    $("#contactModal").modal('show');
  });
});

$(document).ready(function () {
  var contactModal = $('#contactModal');

  contactModal.modal({
    backdrop: 'static',
    keyboard: false,
    show: false
  });

  $('.btn-close').click(function () {
    contactModal.modal('hide');
  });

  contactModal.on('hidden.bs.modal', function () {
    $('.modal-backdrop').remove();
  });
});

// Support button when navigation bar is scrolled

var supportButton = document.querySelector('#supportButton');
var heroSection = document.querySelector('#hero-section');

var originalText = supportButton.textContent;
var originalClass = supportButton.className;

var originalClickEvent = supportButton.onclick;

var scrollLimit = heroSection.offsetHeight / 3;

window.addEventListener('scroll', function () {
  if (window.pageYOffset > scrollLimit) {

    supportButton.textContent = 'Notify me';
    supportButton.className = 'btn notify-btn';

    supportButton.onclick = function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  } else {

    supportButton.textContent = originalText;
    supportButton.className = originalClass;

    supportButton.onclick = originalClickEvent;
  }
});

// FAQ Accordion

let questions = document.querySelectorAll(".faq_question");

questions.forEach((question) => {
  let icon = question.querySelector(".icon-shape");

  question.addEventListener("click", (event) => {
    const active = document.querySelector(".faq_question.active");
    const activeIcon = document.querySelector(".icon-shape.active");

    if (active && active !== question) {
      active.classList.toggle("active");
      activeIcon.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }

    question.classList.toggle("active");
    icon.classList.toggle("active");

    const answer = question.nextElementSibling;

    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});