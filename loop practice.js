let sum = 0
for (let i = 1; i <= 1000; i++) {
    sum += i
}
console.log(sum)



let summ = 0
for (let i = 1; i <= 10; i++) {
    summ += i
}
console.log(summ)



let suum = 0
for (let i = 93; i <= 845; i++) {
    if(i%2 == 1){
        suum += i
    }
}
console.log(suum)



let suumm = 0
for (let i = 1; i <= 10; i++) {
    if(i%2 == 1){
        suumm += i
    }
}
console.log(suumm)



let ssum = 1
for (let i = 1; i <= 400; i++) {
    if(i%6 == 0){
        ssum *= i
    }
}
console.log(ssum)

let num = 7
for(let i = 2; i < num; i++) { 
    if (num % i == 0) { 
        console.log(num + " is not prime");
        return;
    }
}
console.log("is prime");

for(i = 1; i<= 100; i++){
    
}

let primes = [];

for (i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(i);
    }
}
console.log(primes)

let n = 4
if(n === 0 || n === 1){
    return 1
} else {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    console.log(factorial);
}


let n1 = 20
let n2 = 8
let smallerNumber = Math.min(n1, n2);
let gcf = 1;

for (let i = 2; i <= smallerNumber; i++) {
if (n1 % i === 0 && n2 % i === 0) {
    gcf = i;
}
}

console.log(gcf)

x = 5
for (let i = 1; i <= x; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

for (let i = x - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

n = 8
let fib = [];
fib[0] = 0;
fib[1] = 1;
for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib);

n = 4
let square = '';
for (let i = 0; i <= n; i++) {
    let row = '';
    for (let j = 0; j <= n; j++) {
        row += Math.abs(i - j) + ' ';
    }
    square += row.trim() + '\n';
}
console.log(square)





