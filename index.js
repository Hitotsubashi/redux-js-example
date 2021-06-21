import store from './store'
import {ADD_NUMBER,SUB_NUMBER} from './store/action/number'

// 更新显示数字的span标签内容
function changeNumber(){
  document.querySelector('#number').textContent=store.getState()
}

// +按钮点击后执行的回调函数，内部通过dispatch分发加1的action
function add(){
  store.dispatch(ADD_NUMBER)
}

// -按钮点击后执行的回调函数，内部通过dispatch分发减1的action
function sub(){
  store.dispatch(SUB_NUMBER)
}

changeNumber()
// 通过subscribe注册监听器，当state变化时，会执行传入的回调函数
store.subscribe(()=>{
  changeNumber()
})

document.querySelector('#add').addEventListener('click',add)
document.querySelector('#sub').addEventListener('click',sub)