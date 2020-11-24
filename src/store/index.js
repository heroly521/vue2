import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        num: 100
    },
    gaetters:{
        count: state=>{
            return state.num > 120 ? 120 : state.num
        }
    },
    mutations:{
        increment(state,pload){
            state.num += pload
        },
        jian(state,pload){
            state.num -= pload
        }
    },
    actions:{
        // AddAction(context){
        //     // console.log(context)
        //     setTimeout(()=>{
        //         context.commit('increment',{n:5})
        //     },1000)
        // }
    }
})
export default store