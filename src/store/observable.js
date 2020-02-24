import Vue from "vue"

// 2.6.0新增Vue.observable, 利用其实现简易的vuex

export const store = Vue.observable({ count: 0})
export const mutations = {
    setCount (count) {
        store.count = count
    }
}

