import Vue from 'vue';
import Vuex from 'vuex';

//已经在项目当中
Vue.use(Vuex);
//定义一个常量  state 状态对象（共享值）
const state={
  count: 3,
  arr: [//状态
    {id: 1, name: 'AnsonZnl', score: 80},
    {id: 2, name: 'jspang', score: 50},
    {id: 3, name: 'jack', score: 90}
  ]
}
//声明  改变状态里的值（同步）
const mutations={
  add(state,n){
    state.count+=n;
  },
  reduce(state,m){
    state.count-=m;
  }
};
//声明 计算属性 /过滤器 getters  = 好
const getters= {//这里对状态进行映射
  // arrList: state => state.arr.map(item => item.score >= 60 ? '及格' : '不及格' )
arrList: function(state){
    return state.arr.map(function(item){
      return item.score >= 60 ? '及格' : '不及格';
    })
},count:function(state){
  return state.count += 100;
}
};
//actions 异步修改状态 可以调用mutations里的方法
const actions = {
  addAction(context){
    context.commit('add',10);
    setTimeout(() =>{context.commit('reduce',10)},3000);
    console.log('我比reduce提前执行！');//异步修改状态
  },
  reduceAction({commit}){
    commit('reduce',10)
  }
}
//暴漏 出去
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
