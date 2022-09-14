const text = document.querySelector('.wrapper-content__text');
const showAllButtons = document.querySelectorAll('.show--button');
const unorderedLists = document.querySelectorAll('.product-items');
const callButtons = document.querySelectorAll('.button--call');
const modalCall = document.querySelector('.modal-call');
const modalMessage = document.querySelector('.modal-message');
const chatButtons = document.querySelectorAll('.button--chat');
const closeButtons = document.querySelectorAll('.modal__button--close');

showAllButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const foldBlock = unorderedLists[i - 1] || text;

    foldBlock.style.height = foldBlock.style.height == "auto" ? (i ? "160px" : "185px") : "auto";
    btn.textContent = btn.textContent == "Скрыть" ? (i ? "Показать все" : "Читать далее") : "Скрыть";
    btn.classList.toggle("arrow--rotate");
  });
})
//first modal
chatButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modalMessage.classList.add('modal--show');
  });
})

closeButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modalMessage.classList.remove('modal--show');
  });
})

//second modal
callButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modalCall.classList.add('modal--show');
  });
})

closeButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modalCall.classList.remove('modal--show');
  });
})
