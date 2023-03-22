// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
console.log("Task №1");

for(i = 10; i <= 20; i++){
    console.log(i);
    
}

// 2.Вивести квадрати чисел від 10 до 20.
console.log("Task №2");

for(i = 10; i <= 20; i++){
    console.log(i * i);
}


// 3.Вивести таблицю множення на 7.
console.log("Task №3");

for (i = 1; i <= 10; i++){
    console.log(`7 * ${i} = ${7 * i}`);
}


// 4.Знайти суму всіх цілих чисел від 1 до 15.
console.log("Task №4");

let sum = 0;
for (i = 1; i <= 15; i++){
    sum = sum + i;
    sum = (1 + 15) * 15 / 2;
    console.log(`The sum of all integers from 1 to 15 is ${sum}`);
}
// 5.Знайти суму всіх цілих чисел від 1 до 15.
console.log("Task №5");

let multi = 1;
for (i = 15; i <=35; i++){
    multi = multi * i;
    console.log(multi);
}
// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
console.log("Task №6");

let sum6 = 0; 
let count = 0;

for (let i = 1; i <= 500; i++) {
  sum6 += i; 
  count++; 
}

const medium = sum6 / count; 

console.log(`Avarage is - ${medium}`); 

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
console.log("Task №7");

for(i = 30; i <= 80; i+=2){
    console.log(i);
}

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
console.log("Task №8");

for (let i = 100; i <= 200; i++) {
	if (i % 3 === 0) {
	  console.log(i);
	}
 }

 // 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
 console.log("Task №9");

 let number = 10;

 for (let i = 1; i <= number; i++) {
	if (number % i === 0) {
	  console.log(i);
	}
 }

// 10. Визначити кількість його парних дільників.
console.log("Task №10");

const num = 10; 
let evenDivisorsCount = 0;

for (let i = 1; i <= num; i++) {
  if (num % i === 0 && i % 2 === 0) {
    evenDivisorsCount++;
  }
}

console.log(evenDivisorsCount);

// 11. Знайти суму його парних дільників.
console.log("Task №11");

let number10 = 10;
let evenDivisorsSum = 0;

for (let i = 1; i <= number10; i++) {
  if (number10 % i === 0 && i % 2 === 0) {
    evenDivisorsSum += i;
  }
}

console.log(evenDivisorsSum);

// 12. Надрукувати повну таблицю множення від 1 до 10.
console.log("Task №12");

for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
	  console.log(i + " x " + j + " = " + i*j);
	}
 }
 












