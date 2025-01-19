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

document.addEventListener("DOMContentLoaded", () => {
  const pageID = document.body.id;
  const galleryImages = {
    cousinPhotoGallery: [
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
    ],
    kahoPhotoGallery: [
      "images/kaho_2036.JPEG",
      "images/kaho_4850.JPEG",
      "images/kaho_4916.JPEG",
      "images/kaho_4997.JPEG",
      "images/kaho_5012.JPEG",
      "images/kaho_5374.JPEG",
      "images/kaho_5391.JPEG",
      "images/kaho_5409.JPEG",
      "images/kaho_5513.JPEG",
      "images/kaho_5696.JPEG",
      "images/kaho_5721.JPEG",
      "images/kaho_5727.JPEG",
      "images/kaho_5728.JPEG",
      "images/kaho_6887.JPEG",
    ],
    mikuPhotoGallery: [
      "images/miku_2036.JPEG",
      "images/miku_4557.JPEG",
      "images/miku_4867.JPEG",
      "images/miku_5004.JPEG",
      "images/miku_5077.JPEG",
      "images/miku_5168.JPEG",
      "images/miku_5436.JPEG",
      "images/miku_5459.JPEG",
      "images/miku_5463.JPEG",
      "images/miku_5847.JPEG",
      "images/miku_5982.JPEG",
      "images/miku_5987.JPEG",
      "images/miku_6423.JPEG",
      "images/miku_6430.JPEG",
      "images/miku_6527.JPEG",
      "images/miku_6533.JPEG",
      "images/miku_6849.JPEG",
      "images/miku_6953.JPEG",
      "images/miku_7206.JPEG",
      "images/miku_9199.JPEG",
    ],
    noaPhotoGallery: [
      "images/noa_4872.JPEG",
      "images/noa_4967.JPEG",
      "images/noa_5024.JPEG",
      "images/noa_5453.JPEG",
      "images/noa_5478.JPEG",
      "images/noa_5576.JPEG",
      "images/noa_5636.JPEG",
      "images/noa_5657.JPEG",
      "images/noa_5667.JPEG",
      "images/noa_5679.JPEG",
      "images/noa_5682.JPEG",
      "images/noa_5696.JPEG",
      "images/noa_5723.JPEG",
      "images/noa_5742.JPEG",
      "images/noa_6848.JPEG",
      "images/noa_6992.JPEG",
      "images/noa_7134.JPEG",
      "images/noa_7197.JPEG",
    ],
    HawaiiPhotoGallery:[
      "images/hawaii_2669.JPEG",
      "images/hawaii_2669.JPEG",
      "images/hawaii_2673.JPEG",
      "images/hawaii_2679.JPEG",
      "images/hawaii_2680.JPEG",
      "images/hawaii_2693.JPEG",
      "images/hawaii_2698.JPEG",
      "images/hawaii_2702.JPEG",
      "images/hawaii_2724.JPEG",
      "images/hawaii_2727.JPEG",
      "images/hawaii_2731.JPEG",
      "images/hawaii_2735.JPEG",
      "images/hawaii_2758.JPEG",
      "images/hawaii_2763.JPEG",
      "images/hawaii_2766.JPEG",
      "images/hawaii_2774.JPEG",
      "images/hawaii_2780.JPEG",
      "images/hawaii_2785.JPEG",
      "images/hawaii_2787.JPEG",
      "images/hawaii_2796.JPEG",
      "images/hawaii_2799.JPEG",
      "images/hawaii_2813.JPEG",
      "images/hawaii_2816.JPEG",
      "images/hawaii_2830.JPEG",
      "images/hawaii_2831.JPEG",
      "images/hawaii_2835.JPEG",
      "images/hawaii_2840.JPEG",
      "images/hawaii_2851.JPEG",
      "images/hawaii_2857.JPEG",
      "images/hawaii_2860.JPEG",
      "images/hawaii_2870.JPEG",
      "images/hawaii_2875.JPEG",
      "images/hawaii_2888.JPEG",
      "images/hawaii_2895.JPEG",
      "images/hawaii_2897.JPEG",
      "images/hawaii_2915.JPEG",
      "images/hawaii_2934.JPEG",
      "images/hawaii_2961.JPEG",
      "images/hawaii_2966.JPEG",
      "images/hawaii_2971.JPEG",
      "images/hawaii_2975.JPEG",
      "images/hawaii_2979.JPEG",
      "images/hawaii_2987.JPEG",
      "images/hawaii_5362.JPEG",
      "images/hawaii_20150909.JPEG",
      "images/hawaii_1647.JPEG",
      "images/hawaii_1662.JPEG",
      "images/hawaii_1664.JPEG",
      "images/hawaii_1665.JPEG",
      "images/hawaii_1669.JPEG",
      "images/hawaii_1838.JPEG",
      "images/hawaii_1841.JPEG",
    ],
    GuamPhotoGallery:[
      "images/guam_0325.JPEG",
      "images/guam_0333.JPEG",
      "images/guam_0377.JPEG",
      "images/guam_0388.JPEG",
      "images/guam_0391.JPEG",
      "images/guam_0402.JPEG",
      "images/guam_0409.JPEG",
      "images/guam_0428.JPEG",
      "images/guam_0432.JPEG",
      "images/guam_0547.JPEG",
      "images/guam_0558.JPEG",
      "images/guam_0572.JPEG",
      "images/guam_0611.JPEG",
      "images/guam_5367.JPEG",
      "images/guam_5387.JPEG",
      "images/guam_5406.JPEG",
      "images/guam_5409.JPEG",
      "images/guam_5416.JPEG",
      "images/guam_5437.JPEG",
      "images/guam_5441.JPEG",
      "images/guam_5444.JPEG",
      "images/guam_5447.JPEG",
      "images/guam_5451.JPEG",
      "images/guam_5452.JPEG",
      "images/guam_5453.JPEG",
      "images/guam_5475.JPEG",
      "images/guam_5476.JPEG",
      "images/guam_5496.JPEG",
      "images/guam_5504.JPEG",
      "images/guam_5520.JPEG",
      "images/guam_5532.JPEG",
      "images/guam_5537.JPEG",
      "images/guam_5549.JPEG",
      "images/guam_5574.JPEG",
    ],
    HiltonPhotoGallery:[
      "images/Hilton_1957.JPEG",
      "images/Hilton_1961.JPEG",
      "images/Hilton_1967.JPEG",
      "images/Hilton_1971.JPEG",
      "images/Hilton_1977.JPEG",
      "images/Hilton_2001.JPEG",
      "images/Hilton_2004.JPEG",
      "images/Hilton_2006.JPEG",
      "images/Hilton_2011.JPEG",
      "images/Hilton_2019.JPEG",
      "images/Hilton_2031.JPEG",
      "images/Hilton_2039.JPEG",
      "images/Hilton_5072.JPEG",
      "images/Hilton_5077.JPEG",
      "images/Hilton_5098.JPEG",
      "images/Hilton_5099.JPEG",
      "images/Hilton_5101.JPEG",
      "images/Hilton_5155.JPEG",
      "images/Hilton_5158.JPEG",
      "images/Hilton_5168.JPEG",
      "images/Hilton_5172.JPEG",
      "images/Hilton_5178.JPEG",
      "images/Hilton_5321.JPEG",
      "images/Hilton_5322.JPEG",
      "images/Hilton_5323.JPEG",
      "images/Hilton_5367.JPEG",
      "images/Hilton_5371.JPEG",
      "images/Hilton_5376.JPEG",
      "images/Hilton_5380.JPEG",
      "images/Hilton_5409.JPEG",
      "images/Hilton_5424.JPEG",
      "images/Hilton_5429.JPEG",
      "images/Hilton_5696.JPEG",
      "images/Hilton_6819.JPEG",
      "images/Hilton_6832.JPEG",
      "images/Hilton_6843.JPEG",
      "images/Hilton_6845.JPEG",
      "images/Hilton_6853.JPEG",
      "images/Hilton_6872.JPEG",
      "images/Hilton_6873.JPEG",
      "images/Hilton_6875.JPEG",
      "images/Hilton_6885.JPEG",
    ],
  };

const images = galleryImages[pageID] || [];
const photoGallery = document.getElementById(pageID)

if (photoGallery){
  images.forEach((src,index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `写真${index + 1}`;
    img.className = "thumbnail";
    img.onclick = () => openModal(img);
    photoGallery.appendChild(img);
  });
}
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

document.getElementById("searchInput").addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    search();
  }
});

document.getElementById("searchInput2").addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    search();
  }
});

function search(){
  const query1 = document.getElementById("searchInput").value.trim();
  const query2 = document.getElementById("searchInput2").value.trim();

  const query = query1 || query2;


  if (["kaho", "華穂", "かほ", "華穂ちん", "かほちん"].includes(query.toLowerCase())) {
    window.location.href = "kaho_album.html";
  } else if (["mikuru", "みっくん", "miku", "みっ君", "みくる", "ミクル"].includes(query.toLowerCase())) {
    window.location.href = "miku_album.html";
  } else if (["noa", "ノアちゃん", "のあちゃん", "のあ", "ノア"].includes(query.toLowerCase())) {
    window.location.href = "noa_album.html";
  } else if (["従妹", "いとこ", "cousin"].includes(query.toLowerCase())) {
    window.location.href = "cousin_album.html";
  } else if (["hilton", "ヒルトン", "ひるとん", "ヒルトンホテル", "ひるとんほてる", "hilton hotel"].includes(query.toLowerCase())) {
    window.location.href = "Hilton_album.html";
  } else if (["guam", "ぐあむ", "グアム"].includes(query.toLowerCase())) {
    window.location.href = "Guam_album.html";
  } else if (["hawaii", "はわい", "ハワイ"].includes(query.toLowerCase())) {
    window.location.href = "hawaii_album.html";
  } else {
    alert("一致するページが見つかりません。");
  }
}

const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');
const searchBox = document.querySelector('.search-box');
const searchBox2 = document.querySelector('.search-box2');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');

function toggleMenu(isOpen){
  hamburger.classList.toggle('open', isOpen);
  sideMenu.classList.toggle('open', isOpen);
  overlay.classList.toggle('active', isOpen);
  body.classList.toggle('no-scroll', isOpen);
  searchBox.classList.toggle('active', isOpen);
  searchBox2.classList.toggle('active', isOpen);
}

hamburger.addEventListener('click', () => {
  const isOpen = !hamburger.classList.contains('open');
  toggleMenu(isOpen);
});

  document.addEventListener('click', (e) => {
    if(!sideMenu.contains(e.target) && !searchBox.contains(e.target) && !hamburger.contains(e.target)){
      toggleMenu(false);
    }
  });

  searchBox.addEventListener('click', (e) => e.stopPropagation());
  searchBox2.addEventListener('click', (e) => e.stopPropagation());

  overlay.addEventListener('click', () => toggleMenu(false));

  window.addEventListener('scroll', () => {
    const isScrolled = window.scrollY > window.innerHeight;

    header.classList.toggle('fixed', isScrolled);
    hamburger.classList.toggle('active', isScrolled);
    searchBox.classList.toggle('active', isScrolled);
    searchBox2.classList.toggle('active', isScrolled);

    header.classList.toggle('darkened', overlay.classList.contains('active'));
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
