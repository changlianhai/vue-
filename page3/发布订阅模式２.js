// ==>> 发布订阅模式， 周末命令 ==>> [学习，吃饭]
let A = function () {
    this.event = {};
};

A.prototype.on = function (eventName, callback) {
    if (this.event[eventName]) {
        this.event[eventName].push(callback);
    } else {
       this.event[eventName] = [callback];

    }
};

A.prototype.emit = function (eventName) {
   if (this.event[eventName]) {
       this.event[eventName].forEach(fn => fn());
   }
};

let study = function () {
  console.log('周末学习');
};

let eat = function () {
    console.log('周末吃饭')
};
let a = new A();
a.on('周末',study);
a.on('周末',eat);

a.emit('周末');

// ==>>两件事  1.周末指令  2.周一指令
a.on('周一', function () {
   console.log('周一上班');
});
a.on('周一', function () {
    console.log('周一打开');
});
a.emit('周一');