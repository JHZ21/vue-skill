<template>
  <div>
    <label for="bookNum">数 量: {{ count | add }}</label>
    <!-- <label for="bookNum">数 量: {{ count | dataServer }}</label> -->
    <!-- <button @click="setCount(count+1)">+</button>
    <button @click="setCount(count-1)">-</button>-->
    <!-- <div v-click>directive: click1</div> -->
    <!-- <div @click="myMethod">来点我啊~</div> -->
    <div>{{ arr }}</div>
    <button @click="changeArrayOneItem">改变数组第一个值</button>
    <span v-pre>{{ msg }}</span>
    <freeze></freeze>
    <div>{{$log(count)}}</div>
    <watch-deep></watch-deep>
    <countUp></countUp>
    <jCountUp></jCountUp>
  </div>
</template>

<script>
import { store, mutations } from "../store/observable";
import countUp from "vue-count-to"
import jCountUp from "hz-v-count-up"
export default {
  name: "HelloWorld",
  components: { countUp, jCountUp },
  data() {
    return {
      count: "12345678",
      arr: [1, 3, 4, 5, 6, 3],
      msg: "msg在此"
    };
  },
  computed: {
    // count() {
    //   return store.count;
    // }
  },
  filters: {
    add(val) {
      return val + "12";
    }
  },
  methods: {
    changeArrayOneItem() {
      // 当你利用索引直接设置一个数组项时或你修改数组的长度时,
      // 由于 Object.defineprototype()方法限制,数据不响应式更新
      // const item = Number.parseInt(Math.random()*10);
      // this.arr[0] = item;
      // this.$set(this.arr, 0, item)
      // this.arr.shift();
      // this.arr.unshift(item);
      // console.log(this.arr[0], this.arr);
    }
    // myMethod(){
    //   this.$myMethod();
    // },
    // setCount: mutations.setCount
  }
};
</script>
