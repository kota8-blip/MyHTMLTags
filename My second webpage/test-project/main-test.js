'use strict';

/*
JavaScriptにおける数値の表現
@taguchi
*/

// console.log(100);
// console.log(-10);
// console.log(2.5);


//大きな数値、小さな数値の表現
console.log(1.2e4);//1.2かける10の4乗＝12000
console.log(1.2e-4);//1.2かける10の-4乗＝0.00012

function openModal(imageElement) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  console.log("Opening modal for image", imageElement.src);
  modal.style.display = "flex";
  modalImage.src = imageElement.src;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');
const searchBox = document.querySelector('.search-box');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  sideMenu.classList.toggle('open');

  if(sideMenu.classList.contains('open')){
    body.classList.add('no-scroll');
    searchBox.classList.add('active');
  } else{
    body.classList.remove('no-scroll');
    searchBox.classList.remove('active');
  }
  });

  document.addEventListener('click', (e) => {
    if(!sideMenu.contains(e.target) && !hamburger.contains(e.target)){
      sideMenu.classList.remove('open');
      hamburger.classList.remove('open');
      body.classList.remove('no-scroll');
      searchBox.classList.remove('active');
    }
  });

  const overlay = document.querySelector('.overlay');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('open');

    if(isOpen){
      overlay.classList.add('active');
    } else{
      overlay.classList.remove('active');
    }
  });

  overlay.addEventListener('click', () => {
    hamburger.classList.remove('open');
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
  });