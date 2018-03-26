// ==>>  发布 emit 、 订阅 on   事件

// ==>> {命令: [fn1, fn2, fn3,...]}
let Gril = function () {
    this._event = {};
};
// ==>> 订阅
Gril.prototype.on = function (eventName, fn) {
    if (this._event[eventName]) {
        this._event[eventName].push(fn);
    } else {
        this._event[eventName] = [fn];
    }
};

// ==>> 解绑
Gril.prototype.off = function (eventName) {
    if (this._event[eventName]) {
        this._event[eventName] = [];
    }
};


// ==>> 发布
Gril.prototype.emit = function (eventName, ...args) {
    if (this._event[eventName]) {
        this._event[eventName].forEach(fn=>fn(...args));
    }
};

let shopping = function (who1, who2) {
    console.log(who2 + '购物');
};
let eat = function (who) {
    console.log(who + '哭');
};

let girl = new Gril();
girl.on('失恋', shopping);
girl.on('失恋', eat);
girl.emit('失恋','你', '我');

girl.off('失恋');
girl.emit('失恋');
