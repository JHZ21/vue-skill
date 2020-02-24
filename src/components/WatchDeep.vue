<template>
<div>
      <div>{{a}}</div>
  <input type="text" v-model="a.aa.aaa">
  <input type="text" v-model="a.aa.aab[2]">
  <input type="text" v-model="a.ab">

  <div>{{b}}</div>
  <input type="text" v-model="b[2]">

</div>
</template>

<script>
export default {
    name: "Watch-Deep",
    data(){
        return {
            a: {
                aa:{
                    aaa: 1,
                    aab: [1,2,3]
                },
                ab:1
            },
            b: [1,2,3]
        }
    },
    watch:{
        a:{
            handler: "print",
            immediate: true,
            deep: true
        }
    },
    methods: {
        print(oldVal, newVal){
            console.log(oldVal, newVal);
        }
    }
}
</script>

<style>

</style>