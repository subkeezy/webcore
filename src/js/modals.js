import { call } from "file-loader";

const sideMenu = document.querySelector('.mobile__wrapper');
const openButton = document.querySelector('.burger__link');
const closeButton = document.querySelector('.mobile__header-cross');
const background = document.querySelector('.mobile-menu');

const body = document.querySelector('body');

const feedback = document.querySelector('.feedback__wrapper');
const feedbackBackground = document.querySelector('.feedback');
const chatBtn = document.getElementsByClassName('chat-btn');
const feedbackCloseBtn = document.querySelector('.feedback__close');

const callback = document.querySelector('.callback__wrapper');
const callbackBackground = document.querySelector('.callback');
const callbackOpenButton = document.getElementsByClassName('call-btn');
const callbackCloseButton = document.querySelector('.callback__close');

let bg = document.createElement('div');
let feedBg = document.createElement('div');
let callBg = document.createElement('div');

function modaleWidndowOpen(window, openBtn, closeBtn, back, bd, backdrop) {
  function open () {
      if (window === sideMenu) {
        openBtn.addEventListener('click', function () {
        window.classList.add('mobile-menu--open');
        bd.style.cssText = 'overflow: hidden';
        back.style.cssText = 'z-index: 1000';

        backdrop.classList.add('mobile__background');
        back.appendChild(backdrop);
      })
      } else if (window === feedback || window === callback) {
        for (let i = 0; i < chatBtn.length; i++) {
        openBtn[i].addEventListener('click', function () {
        close();
        if (window === feedback) {
          window.classList.add('feedback__wrapper--open');
          backdrop.classList.add('feedback__background');
        } else if (window === callback) {
          window.classList.add('callback__wrapper--open');
          backdrop.classList.add('callback__background');
        }
            bd.style.cssText = 'overflow: hidden';
            back.style.cssText = 'z-index: 1000';
            back.appendChild(backdrop);
      })
      }
    }
  }
  open();

  function close () {
    closeBtn.addEventListener('click', function () {
      if (window === sideMenu) {
        window.classList.remove('mobile-menu--open');
      } else if (window === feedback) {
        window.classList.remove('feedback__wrapper--open');
      } else if (window === callback) {
        window.classList.remove('callback__wrapper--open');
      }
        bd.style.cssText = 'overflow-x: hidden';
        back.style.cssText = 'z-index: -1';
        backdrop.remove();
    })

    backdrop.addEventListener('click', function () {
      if (window === sideMenu) {
        window.classList.remove('mobile-menu--open');
      } else if (window === feedback) {
        window.classList.remove('feedback__wrapper--open');
      } else if (window === callback) {
        window.classList.remove('callback__wrapper--open');
      }
      bd.style.cssText = 'overflow-x: hidden';
      back.style.cssText = 'z-index: -1';
      backdrop.remove();
    })
  }
  close ()
}

const desktopSize = window.matchMedia('(min-width: 1440px)');

function preventMobile(isDesktop) {
  if (isDesktop) {
    sideMenu.classList.remove('mobile-menu--open');
    sideMenu.style.cssText = 'overflow-y: auto';
    body.style.cssText = 'overflow-x: hidden';
    background.style.cssText = 'z-index: 1';
    bg.remove();
  } else {
    background.style.cssText = 'z-index: -1';
  }
}

// function noScroll(desktop) {
//   if (desktop) {
//     body.style.cssText = 'overflow: hidden';
//   }
// }
// noScroll(desktopSize.matches)
preventMobile(desktopSize.matches);

desktopSize.addEventListener('change', function(event) {
  preventMobile(event.matches);
})


modaleWidndowOpen(sideMenu, openButton, closeButton, background, body, bg)
modaleWidndowOpen(feedback, chatBtn, feedbackCloseBtn, feedbackBackground, body, feedBg)
modaleWidndowOpen(callback, callbackOpenButton, callbackCloseButton, callbackBackground, body, callBg)



