// Задача 1. Найти сумму трёх чисел

function sumNumbers(a, b, c) {
    return a + b + c;
}
let result = sumNumbers(69, 52, 96);
console.log(result); 
//---

// Задача 2. По двум заданным числам проверять является ли одно квадратом другого

function Square(a, b) {
    return (a === b * b) || (b === a * a);
}
let result2 = Square(16, 4);

console.log(result2);

//---
// Задача 3. На промежутке от 1 до N, показать кубы чисел, заканчивающихся на четную цифру

function showCubes(from, N) {
    let cubes = [];

    for (let i = from; i <= N; i++) {
        let cube = i * i * i;
        let lastDigit = cube % 10;
        if (lastDigit % 2 === 0) {
            cubes.push(cube);
        }
    }

    return cubes;
}

let from = 1;
let N = 10;
let cubes = showCubes(from, N);
console.log(cubes);