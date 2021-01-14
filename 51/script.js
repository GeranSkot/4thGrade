

const persone = {
    name: 'Alex',
    tel: '+375296409067',
    parents : {
        mom: 'Tanya',
        dad: 'Alex'
    }
};

const clone = JSON.parse(JSON.stringify(persone)); //Полное клонирование, а не поверхностное
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);

// console.log(JSON.stringify(persone)); //на сервак в строку
// console.log(JSON.parse(JSON.stringify(persone))); //с сервака парсим

