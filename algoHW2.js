// ДЗ
// Оцените сложность алгоритма

// task #1
// START
// READ number n
// IF n == 1 THEN return
// FOR i = 1, i <= n, i + 1
// 	FOR j = 1; j <= n, j + 1
// 		print "*"
// 		BREAK
// END        ""O(1)""

//----------
// task #2
// START
// READ number n
// numbers i = 0, j = 0, a = 0
// FOR i = n/2, i <= n; i + 1
// 	FOR j = 2, j <= n, j * 2
// 		a = a + n / 2
// END        ""O(n log n)""
//----------

// task #3
// START
// READ number n
// number a = 0
// FOR i = 0, i < n, i + 1
// 	FOR j = n, j > i, j - 1
// 		a = a + i + j
// END          ""O(n2)""
//----------

// task #4
// START
// READ number n
// numbers a = 0, i = n
// WHILE i > 0
// 	a = a + i
// 	i = i / 2
// END           ""O(log n)""
//----------

//Изучите какие числа называются Числами Фибоначчи (url)
// Напишите на изучаемом вами языке программирования, рекурсивную функцию вычисления таких чисел

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(0));


//Напишите на изучаемом вами языке программирования, итеративную функцию вычисления таких чисел

function fibonacciIterative(n) {
    if (n <= 1) {
        return n;
    }
    let elem1 = 0;
    let elem2 = 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = elem1 + elem2;
        elem1 = elem2;
        elem2 = result;
    }
    return result;
}


//Вычислите первые 10, 20, 30 чисел Фибоначчи при помощи рекурсии и при помощи цикла.

function getFibonacciRecursive(count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(getFibonacciRecursive(i));
    }
    return result;
}

console.log(getFibonacciRecursive(10));
console.log(getFibonacciRecursive(20));
console.log(getFibonacciRecursive(30));

//--
function fibonacciIterative(n) {
    if (n <= 1) {
        return n;
    }
    let elem11 = 0;
    let elem22 = 1;
    let result2 = 1;
    for (let i = 2; i <= n; i++) {
        result2 = elem11 + elem22;
        elem11 = elem22;
        elem22 = result2;
    }
    return result2;
}


function getFibonacciIterative(count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(fibonacciIterative(i));
    }
    return result;
}

console.log(getFibonacciIterative(10));
console.log(getFibonacciIterative(20));
console.log(getFibonacciIterative(30));


// Сколько раз была вызвана рекурсия и сколько итераций цикла было произведено. Какой вывод можно сделать

let recursiveCallCount = 0;

function fibonacciRecursive(n) {
    recursiveCallCount++;
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function RecursiveCount(count) {
    let result = [];
    recursiveCallCount = 0;
    for (let i = 0; i < count; i++) {
        result.push(fibonacciRecursive(i));
    }
    console.log( '${recursiveCallCount}' );
    return result;
}

console.log(RecursiveCount(10));
console.log(RecursiveCount(20));
console.log(RecursiveCount(30));
//
function fibonacciIterativeWithCount(n) {
    if (n <= 1) {
        return { result: n, iterationCount: 1 };
    }
    let elem111 = 0;
    let elem222 = 1;
    let result = 1;
    let iterationCount = 1; // Счетчик итераций
    for (let i = 2; i <= n; i++) {
        result = elem111 + elem222;
        elem111 = elem222;
        elem222 = result;
        iterationCount++;
    }
    return { result, iterationCount };
}

function IterativeCount(count) {
    let result = [];
    let totalIterations = 0; // Общее количество итераций
    for (let i = 0; i < count; i++) {
        let { result: fibNumber, iterationCount } = fibonacciIterativeWithCount(i);
        result.push(fibNumber);
        totalIterations += iterationCount;
    }
    console.log(` ${totalIterations}`);
    return result;
}

console.log(IterativeCount(10));
console.log(IterativeCount(20));
console.log(IterativeCount(30));