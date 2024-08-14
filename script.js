// console.log("Hello world");
// console.error("This is an error");
// console.warn("This is a warn");

// let age = 30;
// age = 31;
// console.log(age);

// const score = 10;
// console.log(score);

// const name = "John";
// const age = 18;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof z);

// const name = "Slava";
// const age = 18;
// console.log("My name is " + name + " and I am " + age);
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

// const s = "Hello world!";
// console.log(s.substring(0, 5));
// console.log(s.toUpperCase());
// console.log(s.toUpperCase());
// console.log(s.length);
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''));

// const y = "technology, computers, it, code";
// console.log(y.split(","));

// const numbers = new Array(1,2,3);
// console.log(numbers);
// const fruits = ["apples", "oranges", "banana", 10];
// fruits[3] = "grapes"
// fruits.push("mangos");
// fruits.unshift("strawberries");
// fruits.pop();
// console.log(Array.isArray(""));
// console.log(fruits.indexOf("oranges"));
// console.log(fruits);

// const person = {
//     firstname: "Jonh",
//     lastname: "Martinez",
//     age: 30,
//     hobbies: ['music', 'lego'],
//     address: {
//         city: "Samara",
//         street: "Centralnya",
//         house: 3,
//         flat: 4
//     }
// }
// console.log(person.firstname, person.lastname, person.hobbies[0], person.address.city);
// const {firstname, lastname, address:{city}} = person;
// console.log(city);
// person.email = "john@gmail.com";
// console.log(person);

// const todos = [
//     {
//         id:1,
//         text: 'Take out trash',
//         isCompleted: false
//     },
//     {
//         id:2,
//         text:"Meet width boss",
//         isCompleted: true
//     },
//     {
//         id:3,
//         text:"Dentist appt",
//         isCompleted: false
//     },
// ];
// console.log(todos[1].text);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);
// for(let i = 0;i <= 10; i++) {
//     console.log(`For Loop Number: ${i}`);
// }
// let i = 0;
// while(i<10) {
//     console.log(`For Loop Number: ${i}`);
//     i++;
// }
// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }
// for(let todo of todos) {
//     console.log(todo.text);
// }
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });
// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })
// console.log(todoCompleted);

// const x = 8;
// const y = 11;
// if(x > 5 && y > 10) {
//     console.log("x > 5 AND y > 10");
// }
// else if(x>10) {
//     console.log("x is more than 10");
// }
// else {
//     console.log("x is less than 10");
// }

// const x = 11;
// const color = x > 10 ? 'red': "blue";
// console.log(color);

// const x = 10;
// const color = "green";
// switch(color) {
//     case "red":
//         console.log("color is red");
//         break;
//     case "blue":
//         console.log("color is blue");
//         break;
//     default: 
//     console.log("color is NOT red or blue");
// }

// function addNums(num1 = 1, num2 = 1) {
//     return num1 + num2;
// }
// console.log(addNums(5, 5));
// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums(5, 5));
// const addNums = (num1 = 1) => num1 + 5;
// console.log(addNums());

// function Person(firstname, lastname, dob) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
// }
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//     return `${this.firstname} ${this.lastname}`;
// }

// class PersonC {
//     constructor(firstname,lastname,dob) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.dob = dob;
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
    
//     getFullName() {
//         return `${this.firstname} ${this.lastname}`
//     }
// }
// const person1 = new Person("John", "Dorian", "4-3-1950");
// const person2 = new Person("Mary", "Smith", "12-3-1995");
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person1, person2.dob.getFullYear());

// console.log(document.getElementById('burger-id'));
// console.log(document.querySelector('.burger'));

// console.log(document.querySelectorAll(".header_li"));

// const items = document.querySelectorAll('.header_li');
// items.forEach((item) => console.log(item));

// const nav = document.querySelector(".header_nav");
// console.log(nav);
// // ul.remove();
// // ul.lastElementChild.remove();
// nav.firstElementChild.textContent = "Hello";
// nav.children[1].innerText = "Brad";
// nav.lastElementChild.innerHTML = "<h1>Hello</h1>"
// const btn = document.querySelector(".begin-button");
// btn.style.background = "red";

// const btn = document.querySelector(".begin-button");
// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector(".title-green")
//     .style.color = "rgba(0, 0, 255, 0.2)";
// })

// const buttons = document.querySelectorAll(".re_button");
// const frenchbtn = [buttons[0], buttons[3]];
// const gerbtn = [buttons[1], buttons[4]];
// // const frenchbtn = [buttons[0], buttons[3]];
// // const frenchbtn = document.querySelectorAll(".re_button")[0][3];
// // const gerbtn = document.querySelectorAll(".re_button")[1][4];
// // const englishbtn = document.querySelectorAll(".re_button")[2,5];
// const frenchpic = document.querySelectorAll(".pictures")[0]
// const gerpic = document.querySelectorAll(".pictures")[1]
// const engpic = document.querySelectorAll(".pictures")[2]
// frenchbtn.addEventListener("click", () => {
//     engpic.style.display = "none";
//     gerpic.style.display = "none";
//     frenchpic.style.display = "grid";
// });
// gerbtn.addEventListener("click", () => {
//     frenchpic.style.display = "none";
//     engpic.style.display = "none";
//     gerpic.style.display = "grid";
// });
// englishbtn.addEventListener("click", () => {
//     frenchpic.style.display = "none";
//     gerpic.style.display = "none";
//     engpic.style.display = "grid";
// });

const buttons = document.querySelectorAll(".re_button");
const frenchbtn = [buttons[0], buttons[3]];
const gerbtn = [buttons[1], buttons[4]];
const englishbtn = [buttons[2], buttons[5]];
const frenchpic = document.querySelectorAll(".pictures")[0];
const gerpic = document.querySelectorAll(".pictures")[1];
const englishpic = document.querySelectorAll(".pictures")[2];

frenchbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        englishpic.style.display = "none";
        gerpic.style.display = "none";
        frenchpic.style.display = "grid";
    });
});

gerbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        frenchpic.style.display = "none";
        englishpic.style.display = "none";
        gerpic.style.display = "grid";
    });
});

englishbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        frenchpic.style.display = "none";
        gerpic.style.display = "none";
        englishpic.style.display = "grid";
    });
});

const burger = document.querySelector(".burger");
const bg_menu = document.querySelector(".menu_burger");
const bg_line = document.querySelector(".header_burger");
const shop = document.querySelector(".header_shop");
burger.addEventListener("click", () => {
    shop.style.display = "none";
    bg_line.style.visibility = "hidden";
    bg_menu.style.display = "flex";
});
const x = document.querySelector(".x");
x.addEventListener("click", () => {
    bg_menu.style.display = "none";
    shop.style.display = "inline";
    bg_line.style.visibility = "visible";
})

// const buttons = document.querySelectorAll(".re_button");
// const cardContainers = document.querySelectorAll(".pictures");

// buttons.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         cardContainers.forEach(card => {
//             card.style.display = "none";
//         });

//         cardContainers[index].style.display = "grid";
//     });
// });
