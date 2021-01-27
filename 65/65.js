// РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ ДЕТКА

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше имя');
//
// const reg = /n/i;

// flags i - in all, g - global, m - matches

// console.log(ans.search(reg)); // ищет только первое совпадение

// console.log(ans.match(reg)); //возвращяет массив

// const pass = prompt('Password');
//
// console.log(pass.replace(/\./g, "*")); //обратный слэш - эранирование

// console.log('12-34-56'.replace(/-/g, ':'));

// const ans = prompt('Введите ваше имя');
// const ans = prompt('Введите ваше number');
//
// // const reg = /n/i;
// // console.log(reg.test(ans));
// const reg = /\d/;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\D\S/gi));

// \D - not digits
// \W - not words


// \d - digits
// \w - words
// \s - space(problel) VADIM BLIN