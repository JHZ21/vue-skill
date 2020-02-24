import Vue from "vue"

const MyPlugin = {};
MyPlugin.install = function (Vue, options) {
    Vue.directive("click", {
        bind(el, binding, vnode, oldVnode) {
            //做绑定的准备工作,添加时间监听
            console.log("指令my-directive的bind执行啦");
        },
        inserted: function (el) {
            //获取绑定的元素
            console.log("指令my-directive的inserted执行啦");
        },
        update() {
            //根据获得的新值执行对应的更新
            //对于初始值也会调用一次
           
            console.log("指令my-directive的update执行啦");
        },
        componentUpdated() {
            console.log("指令my-directive的componetUpdated执行啦");
        },
        unbind() {
            //做清理操作
            //比如移除bind时绑定的事件监听器s
            console.log("指令my-directive的unbind执行啦");
        }
    })
}
// 3. 注入组件
Vue.mixin({
    created() {
        console.log("注入组件的created被调用啦");
        console.log("options的值为");
    }
})

// 4. 添加实例方法
Vue.prototype.$myMethod = function (methodOptions) {
    console.log("实例方法myMethod被调用啦");
}

// Vue.use()执行，会触发 install
Vue.use(MyPlugin,{someOption: true});