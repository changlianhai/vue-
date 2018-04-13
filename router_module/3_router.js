//=>一级路由定义区域
const onePermissionsApply = {
    template: '<div>1</div>'
};
const oneMyPermissions = {
    template: '<div>2</div>',
    created() {
        console.log(this.$route);
    }
};

const oneMyApproval = {
    template: '<div>5</div>'
};

const onePermissionsManagement = {
    template: '#permissionsManagementTemplate'
};


// ==>>二级路由区域
  //==>> 权限管理
const twoPermissionsManagement1 = {
  template: '#twoPermissionsManagement1Template',
    created() {
     this.getData();
    },
    computed:{

        count() {
            return this.dataList.length;
        }
    },
    data() {
      return {
          dataList: [],
          userName:'',
          userManage: '',
          // flag: true,

      }
    },
    methods: {
       getData() {
           axios.get('./3.data.json').then(res => {
               this.dataList = res.data;
           })
       },
        itemAdd() {
           let obj ={id:this.userName, title:this.userManage};
           if (obj.id.length === 0 || obj.title.length === 0) {
               return;
           }
           this.dataList.unshift(obj);
           this.userName = '';
           this.userManage = '';
        },
        removeItem(n) {
           this.dataList.splice(n, 1);
        },
        datel(n) {
           let curObj = this.dataList[n];
           alert(curObj.id.toString() + curObj.title)
        }
    }
};

const twoPermissionsManagement2 = {
    template: '#twoPermissionsManagement2Template'
};

const twoPermissionsManagementDaMi = {
    template: '<div>大米模块内容</div>'
};
const twoPermissionsManagementXiaoMai = {
    template: '<div>小麦模块内容</div>'
};


const router = new VueRouter({
   routes: [
       {
           path: '/onePermissionsApply',
           component: onePermissionsApply,
           meta:{
               x: 1,
               y: 2
           }
       },
       {
           path: '/oneMyPermissions/:pid',
           component: oneMyPermissions,
           meta:{
               x: 1,
               y: 2
           },
           query:{
               a: 1,
               b: 2,
               c: 3
           }
       },
       {
           path: '/oneMyApproval',
           component: oneMyApproval,
       },{
           path: '/onePermissionsManagement',
           component: onePermissionsManagement,
           children: [
               {
                   path: '/',
                   redirect: '/twoPermissionsManagement1',
               },
               {
                   path: '/twoPermissionsManagement1',
                   component: twoPermissionsManagement1,
               },
               {
                   path: '/twoPermissionsManagement2',
                   component: twoPermissionsManagement2,
                   children: [
                       {
                           path: '/twoPermissionsManagementDaMi',
                           component:twoPermissionsManagementDaMi
                       },
                       {
                           path: '/twoPermissionsManagementXiaoMai',
                           component:twoPermissionsManagementXiaoMai
                       }
                   ]
               }
           ]
       }
   ]
});

router.beforeEach((to, from, next) => {
    next();
});
router.afterEach((to, from) => {

});