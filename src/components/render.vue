
<template>
  <div>
    <child :leve="level"></child>
  </div>
</template>

<script>
import Vue from "vue"
Vue.component("child", {
    render(h) {
        const tag = ["div", "p", "strong", "h1", "h2", "textarea"][this.level]
        return h(tag, this.$slots.default)
    },
    props: {
        level: { type: Number, required: true }
    }
})
export default {
    name: "render",
    data() { return {level: 3}}
}

//初级写法
// <template>
//     <div>
//         <div v-if="level === 1"><slot></slot></div>
//         <p v-else-if="level === 2"><slot></slot></p>
//         <h1 v-else-if="level === 3"><slot></slot></h1>
//         <h2 v-else-if="level === 4"><slot></slot></h2>
//     </div>
// </template>


</script>