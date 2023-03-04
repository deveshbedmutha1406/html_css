document.getElementById("txt").innerHTML = "new1";

document.getElementById("txt").style.fontSize = "40px";

// to hide
document.getElementById("txt").style.display = "none";

// to show
document.getElementById("txt").style.display = "block";

function fun() {
    document.getElementById('off').src='./images/off.webp'
}

function funn2() {
    document.getElementById('off').src='./images/on.jpeg'
}

// document.write("deesh") // testing purpose.

// window.alert(5 + 6)

// const obj = { type: "sedan", model: "b22", owner: "devesh" }

// console.log(obj["type"] + " " + obj["model"])
// obj.newprop = "newporp"
// console.log(obj)

obj = {
    Name: "devesh",
    Surname: "Jain",
    Education: "BEIT",
    fullName: function(){
        return this.Name + " " + this.Surname;
    }
}

console.log(obj.fullName);

function getDate() {
    document.getElementById("dt").innerHTML = Date();
}
// getDate();

let header = "Templates Headers";
let tags = ["first", "second", "thid"]
let html = `<h2>${header}</h2><ul>`

for (const x of tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("dt1").innerHTML = html;

// html1 = `<ul>`
const arr = ['car1', 'car2', 'car3']
// for (const x of arr) {
//     html1 += `<li>${x}</li>`;
// }
// html1 += `</ul>`;
document.getElementById("dt1").innerHTML = arr;

let html1 = `<ul>`;
arr.forEach(myfun);

function myfun(value) {
    html1 += `<li>${value}</li>`;
}
html1 += `</ul>`;


document.getElementById("dt1").innerHTML = html1;

num1 = [1, 2, 3, 4, 5];
num2 = num1.map(mulfun);
function mulfun(value) {
    return value * 2;
}
console.log(num2);

t1 = [10, 20, 30, 40, 9, 8, 7]
t2 = t1.filter(fun2);
function fun2(val) {
    return val > 10;
}
console.log(t2);

t3 = t2.reduce(fun3, 10);
function fun3(prev, val, idx, arr) {
    return prev + val;
}
console.log(t3);

t4 = t2.every(fun4);
function fun4(val) {
    return val > 10;
}
console.log(t4);