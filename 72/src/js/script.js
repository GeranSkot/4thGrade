// import {one, two} from "./main";
//
// console.log(`${one} and ${two}`);

// import {one as first} from "./main";
//
// console.log(`${first}`);

// import * as data from './main';
//
// console.log(`${data.one} and ${data.two}`);
// // data.sayHi();
//
// import sayHi from "./main";
//
// sayHi();
// т.к. бразуер тупой, нужно полностью прописывать
import * as data from './main.js';

console.log(`${data.one} and ${data.two}`);
// data.sayHi();

import sayHi from "./main.js";

sayHi();