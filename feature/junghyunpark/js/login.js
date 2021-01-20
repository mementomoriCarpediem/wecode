const loginBtn = document.querySelector('button');
const inputs = document.querySelectorAll('input');

function activateBtn() {
  // loginBtn.disabled ? false : true;
  loginBtn.disabled = false;
  loginBtn.style.backgroundColor = '#1e90ff';
}

inputs.forEach((input) => input.addEventListener('change', activateBtn));
