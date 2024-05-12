// TASK 1
function checkFields() {
  let fieldValue1 = document.getElementById("field1").value;
  let fieldValue2 = document.getElementById("field2").value;
  if (fieldValue1 && fieldValue2) {
    alert("Обидва поля заповнені");
  } else {
    alert("Не всі поля заповнені");
  }
}
// TASK 2
function checkSum() {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  let sum = number1 + number2;
  if (sum > 10) {
    alert("Сума більша за 10");
  } else {
    alert("Сума менша за 10");
  }
}
// TASK 3
let message = prompt("Яка ваша улюбленна мова програмування?");
if (message.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}
// TASK 4
let number = parseInt(prompt("Введіть число:"));
if (number > 10 && number < 20) {
  alert("Число входить в діапазон від 10 до 20");
} else {
  alert("Число не входить в діапазон від 10 до 20");
}
// TASK 5
const userName = prompt("Введіть ім'я");
const email = prompt("Введіть вашу електронну пошту");
const password = prompt("Введіть пароль");
if (userName.length >= 3 && email.includes("@") && password.length >= 6) {
  alert("Все правильно");
} else {
  alert("Перевірти чи вірно ви ввіли дані!");
}
