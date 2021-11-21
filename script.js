// 'use strict';

// ///////////////////////////////////////
// // Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);


// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
// message.innerHTML = 'We use cookies.<button class="btn btn--close-cookie">Got it</button>';

// header.prepend(message);

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function(e) {
//     // const s1coords = section1.getBoundingClientRect();
//     // console.log(s1coords);
//     // console.log('Current scrool (X/Y)', window.pageXOffset, window.pageYOffset);
//     // console.log('height/width viewport', 
//     // document.documentElement.clientHeight, document.documentElement.clientWidth);


//     // //Scrolling
//     // //window.scrollTo(s1coords.left + window.pageXOffset, window.pageYOffset + s1coords.top);
//     // window.scrollTo({
//     //     left: s1coords.left + window.pageXOffset, 
//     //     top: window.pageYOffset + s1coords.top,
//     //     behavior: 'smooth'
//     // });

//     section1.scrollIntoView({behaviour: 'smooth'})
    
// });

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
    section1.scrollIntoView({behavior: 'smooth'});
});


// 1. Add event listener to common parent element.
// 2. Determine what element originated the event.

document.querySelector('.nav__links').addEventListener('click', function(e) {
    console.log(e.target);
    e.preventDefault();

    //Matching strategy
    if(e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView(
            {
                behavior: 'smooth'
            }
        )
    }
});



// document.querySelectorAll('.nav__link').forEach(
//     function(el) {
//         el.addEventListener('click', function(e) {
//             e.preventDefault(); 
//             const id = this.getAttribute('href');
//             console.log(id);
//             document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//         });
//     });





