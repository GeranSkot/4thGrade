

const app = '123';

const number = 1;

(function (){
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

const user = (function () {
        const private = function () {
          console.log('private');
        };

        return {
            sayHello: private
        };
}());

user.sayHello();