
// ==>> resolve 代表成功
setTimeout(() => {
    console.log(1);
}, 1000);
let p = new Promise((resolve, reject) => {
    console.log(2);
    for (let i=0;i<1000;i++) {
        i === 999 && resolve();
    }
console.log(3);
}).then(res => {
    console.log(4);
});
console.log(5);