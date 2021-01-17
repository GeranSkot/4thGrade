

// console.log('Запрос данных...');

// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...')
//
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
//
//         // setTimeout(() => {
//         //     product.status = 'order';
//         //     console.log(product);
//         // }, 2000);
//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//         console.log('Данные получены');
//     }, 2000);
// });

// req.then((product) => {
//     const req2 = new Promise((resolve, reject) => {
//         product.status = 'order';
//         resolve(product);
//     }, 2000);
//
//     req2.then(data => {
//        console.log(data);
//     });
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
//
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             reject(product);
//         }, 2000);
//     });
//
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error('FUCK YOU');
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
//
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error('FUCK YOU');
// }).finally(() => {
//     console.log('YEAH  BOY');
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000'));
// test(2000).then(() => console.log('2000'));

// Promise.all([test(1000), test(2000)]).then(() => {
//    console.log('All');
// });

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('Race');
});




