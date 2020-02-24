<template>
  <div>
      <div>数据显示：{{ list }}</div>
      <button @click=method1>method1</button>
      <button @click=method2>method2</button>
      <button @click=method3>method3</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // vue不会对list里的object做getter,setter绑定
            list: Object.freeze([
                { value: 1 },
                { value: 2 }
            ])
        }
    },
    methods:{
        method1(){
            //界面不会有响应,因为单个属性被冻结
            this.list[0].value = 50;
        },
        method2(){
            this.list = [{
                value: 100,
                value: 200
            }]
        },
        method3(){
            this.list = Object.freeze([
                { value: 100 },
                { value: 200 }
            ])
        }
    },
    mounted() {
       
    }
}
</script>

<style>

</style>