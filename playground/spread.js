// function add (a, b) {
//   return a + b;
// };
// console.log(add(3, 1));


// var toAdd = [9, 5];
// console.log(add(...toAdd))

// spread operator comes before an array or a variable that is an array and spreads out its values;
// when written in a method/ func, it speads out our arrays as individual arguments;



// var groupA = ['Jimmy', 'Tony'];
// var groupB = ['Henry'];
// // you get different results when you have & dont have the spread operator;
// var final = [...groupB, 3, ...groupA];

// console.log(final);

var person = ['Ras Joh', 28];
var personTwo = ['Miriam', 25];

function hey (name, age) {
  console.log('Hello ' + name + ', you are ' + age + ' years old');
}

hey(...person);
hey(...personTwo);

var names = ['Rick', 'Morty'];
var final = ['Stewie', ...names];
// Hi Rick; forEach method is prefered.

final.forEach(function (name) {
  console.log('Hi ' + name);
});

