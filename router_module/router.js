let home = {
  template: '<div>home首页</div>'
};
let book = {
    template: '<div>book页面</div>'
};

let list = {
    template: '<div>home列表页</div>'
};
let food = {
    template: '<div>食物页面</div>'
};
let router = new VueRouter({
    // mode: 'history',
    routes:[
        {
            path: '/home',
            component: home,
            children: [
                {
                    path:'book',
                    component:book
                }
            ]
        },
        {
            path: '/list',
            component: home,
            children: [
                {
                    path:'food',
                    component:book
                }
            ]
        }
    ]
});