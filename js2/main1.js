// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = []
arr [0] =1
arr[1] =2
arr[2] =3
arr[3]=4
arr[4]=5
arr[5]=6
arr[6]=7
arr[7]= 'next'
arr[8]='next1'
arr[11] =11
console.log(arr)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title:'story',
    pageCount:150,
    genre:'drama'
}
console.log(book)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//     Поле "автори" - масив. Кожен автор має поля name,age

let book1= {
    title:'story',
    pageCount:150,
    genre:'drama',
    authors:[
        {
            name:'vasya',
            age:31
        },
        {
            name:'kolya',
            age:32
        },
        {
            name:'petya',
            age:33
        }
    ]
}
//
//
// - Створити масив з 10 об'єктами які описують сутніть "користувач". ' +
// 'Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user =[
    {
        name:'anton',
        username:'anton1',
        password: 1231
    },
    {
        name:'anton',
        username:'anton2',
        password: 1232

    },
    {
        name:'anton',
        username:'anton3',
        password: 1233
    },
    {
        name:'anton',
        username:'anton4',
        password: 1234
    },
    {
        name:'anton',
        username:'anton5',
        password: 1235
    },
    {
        name:'anton',
        username:'anton6',
        password: 1236
    },
    {
        name:'anton',
        username:'anton7',
        password: 1237
    },
    {
        name:'anton',
        username:'anton8',
        password: 1238
    },
    {
        name:'anton',
        username:'anton9',
        password: 1239
    },
]
console.log(user[0].password)
console.log(user[1].password)
console.log(user[2].password)
console.log(user[3].password)
console.log(user[4].password)
console.log(user[5].password)
console.log(user[6].password)
console.log(user[7].password)
console.log(user[8].password)

