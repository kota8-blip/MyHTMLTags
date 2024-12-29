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

const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  sideMenu.classList.toggle('open');
});

window.addEventListener('scroll', function(){
  const header = this.document.querySelector('.header');
  if(window.scrollY > window.innerHeight){
    header.classList.add('fixed');
    } else{
      header.classList.remove('fixed');
    }
});