import checkHealth from './task.js';

const Petya = { name: 'Петя', health: 90 };
const Vasya = { name: 'Вася', health: 50 };
const Alex = { name: 'Анаксимандр', health: 10 };

console.log('app.js bundled');
console.log(checkHealth(Petya));
console.log(checkHealth(Vasya));
console.log(checkHealth(Alex));