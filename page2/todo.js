let Vue = require('Vue');
let axios = require('axios');
const vm = new Vue({
    el: '#app',
    data: {
        todoList: [],
        addTask: '',

    },
    methods: {
        addTaskFn() {
            let obj = {};
            obj.title = this.addTask;
            obj.isSelected = false;
            this.todoList.push(obj);
            this.addTask = '';
        },
        removeItem(event, n) {
            this.todoList.splice(n, 1);
        },
        member(){

        }
    },
    computed: {
        num() {  // ==>>动态计算没有完成任务的个数
            let n = null;
            n = this.todoList.filter(item => {
               return !item.isSelected
            }).length;
            return n;
        }
    },
    created() {
        axios.get('./../data/todo.json').then(result=> {
            this.todoList = result.data;
        }, err=> {
            console.log(err);
        })
    }
});


