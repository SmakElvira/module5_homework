let val = prompt("Введите значение");
let num = + val;
if (isNaN(num)) {
  console.log("Упс, кажется, вы ошиблись");
} else {
    let a = num % 2;
    if (a === 0) {
      console.log("Четное число");
    } else {
      console.log("Нечетное число")
    }
}