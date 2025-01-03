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

const cousinImages = [
"images/cousin_1424.JPEG",
"images/cousin_1586.JPEG",
"images/cousin_1934.JPEG",
"images/cousin_2039.JPEG",
"images/cousin_2295.JPEG",
"images/cousin_2301.JPEG",
"images/cousin_2447.JPEG",
"images/cousin_2650.JPEG",
"images/cousin_3021.JPEG",
"images/cousin_3266.JPEG",
"images/cousin_3277.JPEG",
"images/cousin_3287.JPEG",
"images/cousin_3288.JPEG",
"images/cousin_3298.JPEG",
"images/cousin_3495.JPEG",
"images/cousin_3501.JPEG",
"images/cousin_3801.JPEG",
"images/cousin_3816.JPEG",
"images/cousin_3907.JPEG",
"images/cousin_4011.JPEG",
"images/cousin_4033.JPEG",
"images/cousin_4212.JPEG",
"images/cousin_4479.JPEG",
"images/cousin_4558.JPEG",
"images/cousin_4705.JPEG",
"images/cousin_4921.JPEG",
"images/cousin_4983.JPEG",
"images/cousin_4991.JPEG",
"images/cousin_4993.JPEG",
"images/cousin_5013.JPEG",
"images/cousin_5043.JPEG",
"images/cousin_5067.JPEG",
"images/cousin_5120.JPEG",
"images/cousin_5242.JPEG",
"images/cousin_5246.JPEG",
"images/cousin_5253.JPEG",
"images/cousin_5273.JPEG",
"images/cousin_5367.JPEG",
"images/cousin_5419.JPEG",
"images/cousin_5513.JPEG",
"images/cousin_5652.JPEG",
"images/cousin_5696.JPEG",
"images/cousin_5721.JPEG",
"images/cousin_5729.JPEG",
"images/cousin_5999.JPEG",
"images/cousin_6016.JPEG",
"images/cousin_6098.JPEG",
"images/cousin_6137.JPEG",
"images/cousin_6242.JPEG",
"images/cousin_6344.JPEG",
"images/cousin_6373.JPEG",
"images/cousin_6392.JPEG",
"images/cousin_6527.JPEG",
"images/cousin_6536.JPEG",
"images/cousin_6819.JPEG",
"images/cousin_6862.JPEG",
"images/cousin_6872.JPEG",
"images/cousin_6875.JPEG",
"images/cousin_7117.JPEG",
"images/cousin_7153.JPEG",
"images/cousin_9200.JPEG",
"images/cousin_9210.JPEG",
];

const cousinPhotoGallery = document.getElementById("cousinPhotoGallery");

cousinImages.forEach((src,index) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = `写真${index + 1}`;
  img.className = "thumbnail";
  img.onclick = () => openModal(img);
  cousinPhotoGallery.appendChild(img);
});

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

window.addEventListener('scroll', function(){
  const header = this.document.querySelector('.header');
  const searchBox = this.document.querySelector('.search-box');
  const hamburger = this.document.querySelector('.hamburger');
  const overlay = this.document.querySelector('.overlay');

  if(window.scrollY > window.innerHeight){
    header.classList.add('fixed');
    searchBox.classList.add('active');
    hamburger.classList.add('active');
  } else{
    header.classList.remove('fixed');
    searchBox.classList.remove('active');
    hamburger.classList.remove('active');
  }

  if(overlay.classList.contains('active')){
    header.classList.add('darkened');
  } else{
    header.classList.remove('darkened');
  }
});

const animations = document.querySelectorAll('.animation img');
const timers = document.querySelectorAll('.timer');
const animationDuration = 5000;
let startTime = Date.now();

const secondAnimations = document.querySelectorAll('.second-animation img');
const secondTimers = document.querySelectorAll('.second-timer');

const thirdAnimations = document.querySelectorAll('.third-animation img');
const thirdTimers = document.querySelectorAll('.third-timer');

function animate(){
  const elapsedTime = Date.now() - startTime;
  const totalDuration = animations.length * animationDuration;
  const loopTime = elapsedTime % totalDuration;

  const currentIndex = Math.floor(loopTime / animationDuration);
  const progress = (loopTime % animationDuration) / animationDuration;

  animations.forEach((img, index) => {
    img.style.opacity = index === currentIndex? '1' : "0";
  });

  timers.forEach((timer, index) => {
    if(index === currentIndex){
      const rotation = progress * 360;
      timer.style.transform = `rotate(${rotation}deg)`;
    } else {
      timer.style.transform = `rotate(0deg)`;
    }      
  });

  const secondTotalDuration = secondAnimations.length * animationDuration;
  const secondLoopTime = elapsedTime % secondTotalDuration;

  const secondCurrentIndex = Math.floor(secondLoopTime / animationDuration);
  const secondProgress = (secondLoopTime % animationDuration) / animationDuration;

  secondAnimations.forEach((img, index) => {
    img.style.opacity = index === secondCurrentIndex ? '1' : "0";
  });

  secondTimers.forEach((timer, index) => {
    if (index === secondCurrentIndex){
      const secondRotation = secondProgress * 360;
      timer.style.transform = `rotate(${secondRotation}deg)`;
    } else{
      timer.style.transform = 'rotate(0deg)';
    }
  });

  const thirdTotalDuration = thirdAnimations.length * animationDuration;
  const thirdLoopTime = elapsedTime % thirdTotalDuration;

  const thirdCurrentIndex = Math.floor(thirdLoopTime / animationDuration);
  const thirdProgress = (thirdLoopTime % animationDuration) / animationDuration;

  thirdAnimations.forEach((img, index) => {
    img.style.opacity = index === thirdCurrentIndex ? '1' : "0";
  });

  thirdTimers.forEach((timer, index) => {
    if (index === thirdCurrentIndex){
      const thirdRotation = thirdProgress * 360;
      timer.style.transform = `rotate(${thirdRotation}deg)`;
    } else{
      timer.style.transform = `rotate(0deg)`;
    }
  });

  requestAnimationFrame(animate);
}

animate();