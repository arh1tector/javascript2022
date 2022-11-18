// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let pl =(a,b) =>a * b
// console.log(pl(15,15))
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// let pl1 =(w) => Math.PI * Math.pow(w, 2)
// console.log( pl1(10))
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let pl2 = (r,h) => Math.PI * Math.pow(r,2) * h
// console.log(pl2(5, 10))

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let arr = [1,2,3,4]
// function foo(array) {
//     for (const icon of array){
//         console.log(icon)
//     }
// }
// foo(arr)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function foo(text){
//     document.write(`<p>${text}</p>`)
// }
// foo( 'lessons')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
//     document.write(`<ui>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ui>`)
// }
// foo('search')

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)

//

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//  let arr =[1,2,true,false,'str'];
// const elem = function (array){
//     document.write(`<ul>`)
//     for (const item of array){
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`)
// }
// elem(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// const arr =[
//     {
//         name: 'Igor',
//         age: 27
//     },
//     {
//         name: 'Katya',
//         age: 25
//     }
// ]
// const users = function (array){
//     for (const user of array){
//         document.write(`${user.name}--${user.age}`)
//     }
// }
// users(arr)
// - створити функцію яка повертає найменьше число з масиву

// let  arr =[1,2,3,4,5,79,99,-1]
//
// function foo(array){
//     let min = array[0]
//     for (const item of array){
//         if (item<min){
//             min =item;
//         }
//     }
//     return min;
// }
// console.log(foo(arr));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let  arr =[1,2,3,4]
function foo(array) {
    let sum = 0
    for (const item of array){
        sum =sum + item;
    }
    return sum
}
console.log(foo(arr))