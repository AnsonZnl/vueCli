import Vue from 'vue';
import Vuex from 'vuex';

//已经在项目当中
Vue.use(Vuex);
//定义一个常量
const state={
  count: 3
}
//改变状态里的值
const mutations={
  add(state){
    state.count++;
  },
  reduce(state){
    state.count--;
  }
}
//暴漏
export default new Vuex.Store({
  state,
  mutations
})
