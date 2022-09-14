let arr = [];
let count;
let result = 1;

do {
    count = +prompt(`Enter value between 2 and 10 (including)`);
    if (count < 0) count = Math.abs(count);
    if (!Number.isInteger(count)) count = Math.round(count);

} while (!(count <= 10 && count >= 2));

for (let i = 0; i < count; i++) {
    let randomValue = Math.round(Math.random() * 10);
    arr.push(randomValue);
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
}
console.log(result);