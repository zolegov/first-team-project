const mobilModalClose = document.querySelector('.header-btn-close');
const mobilHeader = document.querySelector('.header-container');
const mobilModalWrap = document.querySelector('.mobil-modal-header-wrap');
const headerBtnOpen = document.querySelector('.open-menu-btn');
const mobilAncor1 = document.querySelector('.mobil-ancor1');
const mobilAncor2 = document.querySelector('.mobil-ancor2');
const mobilAncor3 = document.querySelector('.mobil-ancor3');

headerBtnOpen.addEventListener('click', function () {
  mobilHeader.classList.add('is-close');
  mobilModalWrap.classList.remove('is-close');
  mobilModalWrap.classList.add('is-open');
});

mobilModalClose.addEventListener('click', function () {
  mobilHeader.classList.remove('is-close');
  mobilHeader.classList.add('is-open');

  mobilModalWrap.classList.add('is-close');
});
mobilAncor1.addEventListener('click', function () {
  mobilHeader.classList.remove('is-close');
  mobilHeader.classList.add('is-open');

  mobilModalWrap.classList.add('is-close');
});
mobilAncor2.addEventListener('click', function () {
  mobilHeader.classList.remove('is-close');
  mobilHeader.classList.add('is-open');

  mobilModalWrap.classList.add('is-close');
});
mobilAncor3.addEventListener('click', function () {
  mobilHeader.classList.remove('is-close');
  mobilHeader.classList.add('is-open');

  mobilModalWrap.classList.add('is-close');
});

 

 
 

