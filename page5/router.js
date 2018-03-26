const moduleA = {
    template: '#moduleATemplate'
};
const moduleB = {
    template: '#moduleBTemplat'
};

const moduleAOne = {
    template: '<div>模块A-1的内容</div>'
};
const moduleATwo = {
    template: '<div>模块A-2的内容</div>'
};
const router = new VueRouter({
    routes: [
        {path: '', component: moduleA},
        {
            path: '/A',
            component: moduleA,
            children: [
                {
                    path: '',
                    component: moduleAOne,
                },
                {
                    path: 'moduleAOne',
                    component: moduleAOne
                },
                {
                    path: 'moduleATwo',
                    component: moduleATwo
                },
                {
                    path: '*',
                    component: moduleAOne
                }
            ]
        },
        {path: '/B', component: moduleB},
        {path: '*', component: moduleA}
    ]
});

const vm = new Vue({
    el: '#app',
    router
});