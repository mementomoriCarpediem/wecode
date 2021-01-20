const feeds = document.querySelector('.feeds');
const input = document.querySelector('.postingCmt');
const button = document.querySelector('#post');

function addPost() {
  const cmtText = input.value;
  const newCmt = document.createElement('p');
  newCmt.innerText = cmtText;
  feeds.appendChild(newCmt);
  input.value = '';
}

button.addEventListener('click', addPost);

const profiles = document.querySelector('.profiles');
const goNext = document.querySelector('#arrow');

function scrollToRight() {
  profiles.scrollLeft += 50;
}

goNext.addEventListener('click', scrollToRight);
