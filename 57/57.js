

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Volondemort'];
//
// const shortNames = names.filter(function (name)  {
//         return name.length < 5;
// });
//
// console.log(shortNames);

// map

// const answers = ['IvAn', 'AnnA', 'Hello'];
// const result = answers.map((item) => {
//     return item.toLocaleLowerCase();
// });
// const result = answers.map((item) => item.toLocaleLowerCase());
// console.log(result);
// let answers = ['IvAn', 'AnnA', 'Hello'];
// answers = answers.map(item => item.toLocaleLowerCase());
// console.log(answers);

// every/some

// const some = [4, 'oWo', 'awerawer'];

// console.log(some.some(item => typeof (item) === 'number'));

// const some = [4, 5, 100500];
// console.log(some.every(item => typeof (item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];
//
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// const arr = [4, 5, 1, 3, 2, 6];
//
// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];
//
// const res = arr.reduce((sum, current) => sum + ', ' + current);
// console.log(res);
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',

};

// const newArray = Object.entries(obj);
const newArray = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

console.log(newArray);

//ДИЧЬ КАКАЯ_ТО, ГДЕ МОЙ ЖОЖО РЕФЕРЕНС