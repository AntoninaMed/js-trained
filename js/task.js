"use strict";


//Привіт! Звісно, ось для тебе кілька задачок на JavaScript:

//Знаходження суми елементів у масиві:
///*  */Створи функцію, яка приймає масив чисел і повертає їхню суму.
/* ================================================================================ */
/* 
function array(a,b,c,d){
  return a+b+c+d;
}
console.log (array(1,2,3,4));
console.log(array(2,2,2,2)); */

 /* підрахунок парних чисел:
Напиши функцію, яка отримує масив чисел і повертає новий масив, який містить лише парні числа з вихідного масиву.
/* ==================================================================================================== */
function getParedNumber(allNumber){
  const paredNumber = [];
 for (const number of allNumber) {
    if (number% 2 === 0) {
        paredNumber.push(number);
      }
    }

    return paredNumber;
 }
 console.log(getParedNumber([1,2,3,4,5,6,7,8,9,10]));
 console.log(getParedNumber([11,12,13,14,15,16,17,18,19,20]))
 


/* Пошук найбільшого елемента:
Створи функцію, яка знаходить найбільший елемент у масиві чисел. */
/* ============================================================================== */





/* Перевірка на простоту:
Напиши функцію, яка приймає число і повертає true, якщо воно просте, і false в іншому випадку. */
