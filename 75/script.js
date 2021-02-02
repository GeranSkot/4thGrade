

try {
    console.log('lol');
} catch (e) {
    console.log(e);
    console.log(e.name);
    console.log(e.reference);
    console.log(e.stack);
    console.log('error');
} finally {
    console.log('finally')
}

console.log('Still going on');

document.querySelector('.active').addEventListener('click', () => {
    console.log('click');
});

