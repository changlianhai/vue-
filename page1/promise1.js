//  买菜 ==>>做饭

// ==>> 回调函数: 将后续的处理逻辑传入到当前要做的事，事情处理好后立马调用函数执行

// ==>> promise 解决回调问题的  promise三个状态: 成功状态resolve， 失败状态reject，  等待状态,两个函数都不执行，等待
function buy(callback) {
    setTimeout(function () {
       let food = '菠菜';
       callback && callback(food);
    }, 2000);
}


buy(function (value) {
    console.log(this);
    console.log(value);
});