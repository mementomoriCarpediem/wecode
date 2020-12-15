function goPage(address) {
  location.href = `${address}`;
}

const computerNum = [];
let his = [];
function pickRanNum() {
  for (var i = 0; i < 4; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    if (computerNum.includes(randomNum)) {
      randomNum = Math.floor(Math.random() * 10);
      i--;
    } else {
      computerNum.push(randomNum);
    }
  }
  console.log(computerNum);
}

function guess(e) {
  e.preventDefault();
  const guessNum = Array.from(input.value);
  console.log(guessNum);

  // const result = guessNum.reduce((total, num) => {
  //   if (!total[num]) {
  //     total[num] = 0;
  //   }
  //   total[num]++;
  //   return total;
  // }, {});
  // console.log(result);

  // while()

  // const isOK = console.log(isOK);

  // if ((isOK = false)) {
  //   alert('동일한 숫자가 2번이상 반복되지 않도록 다시 입력해주세요.');
  //   return (input.value = '');
  // } else {
  let strike = 0;
  let ball = 0;
  let out = 0;

  for (var i = 0; i < 4; i++) {
    if (parseInt(guessNum[i]) == computerNum[i]) {
      strike++;
    } else if (computerNum.includes(parseInt(guessNum[i]))) {
      ball++;
    } else {
      out++;
    }
  }
  console.log(strike, ball, out);

  let html;
  let htmlHistory;

  if (strike == 4) {
    html = `
      <p class='score'> Conglatulation~ 👏👏</p>
      `;
    var applause = new Audio('applause.wav');
    applause.play();
  } else {
    html = `
    <p class='score'> ${strike}<span style="color:blue">S</span> ${ball}<span style="color:yellow">B</span> ${out}<span style="color:red">O</span> </p>
    `;
    htmlHistory = `<p class='score' ㄴ> ${input.value}  ================>  ${strike}S ${ball}B ${out}O </p>
    `;
  }
  score.innerHTML = html;
  his.push(htmlHistory);
  history.innerHTML = his.join('');
}

function reset() {
  input.value = '';
}

const history = document.querySelector('.history');
const score = document.querySelector('.resultDisplay');
const input = document.querySelector('#guessNumber');
const submit = document.querySelector('#guess');
const replay = document.querySelector('#replay');
submit.addEventListener('click', guess);
replay.addEventListener('click', reset);

pickRanNum();
// # 코드 작성 순서
// 1. 4자리 랜덤 숫자를 생성 및 변수에 담아두기 => 맞춰야할 숫자
// 2. input 창에서 4자리 숫자를 받아오기
// 3. 1번의 숫자와 비교해서, 위치와 숫자가 같으면 스트라이크에 +1, 위치만 같으면 볼에 +1, 없으면 아웃에 +1 해서 template literal 이용해서 innterHTML로 표시
// 4. HTML History에 맞출때까지의 기록 보여주기
