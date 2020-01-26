// Завдання 1
let city;
city = 'Київ';
city = 'Львів';
let address = city;
console.log(address);
// Завдання 2
let num = +prompt('Завдання 2: Число');
num % 2 == 0 ? console.log(`Число '${num}' парне`) : console.log(`Число '${num}' не парне`);
// Завдання 3
function max(a, b, ...arg) {
    let max = a < b ? b : a;
    for (let i = 0; i < arg.length; i++)
        if (max < arg[i])
            max = arg[i];
    return max;
}
console.log('1.– має повернути 5', max(5, -2));
console.log('2.– має повернути 30', max(5, -2, 30, 6));
// Завдання 4
function getSqrt(a) {
    console.log(a, typeof (a));
    if (typeof (a) === 'number')
        a < 0 ? console.log(`Введіть додатнє число`) : console.log(`Квадратний корінь з ${a} дорівнює ${Math.sqrt(a)}`);
    if (!(typeof (a) === 'number') && typeof (a) !== 'undefined')
        console.log(`Повинно бути числове значення`);
    if (typeof (a) === 'undefined')
        console.log(`Будь ласка, введіть число!`);
}
getSqrt(4);
getSqrt(true);
getSqrt('bla');
getSqrt([]);
getSqrt(-4);
getSqrt();
