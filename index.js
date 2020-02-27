// let name = '이은지';
// let age = '27';
// let sex = '여';

// if(name === '이은지') {
//     return console.log('안녕하세요', name, '님');
// }

// console.log(name, age, sex);

// 콜라(1) | 사이다(2) | 게토레이(3)
let 선택된번호 = 5;
let 개수 = 5;

if (선택된번호 === 1) {
  console.log("선택된 음료는 콜라입니다.");
  for (i = 0; i < 개수; i++) {
    console.log("콜라");
  }
} else if (선택된번호 === 2) {
  console.log("선택된 음료는 사이다입니다.");
  for (i = 0; i < 개수; i++) {
    console.log("사이다");
  }
} else if (선택된번호 === 3) {
  console.log("선택된 음료는 게토레이입니다.");
  for (i = 0; i < 개수; i++) {
    console.log("게토레이");
  }
} else {
  console.log("선택된 번호가 아니네요ㅜㅜ");
}
