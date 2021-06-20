import store from './store'
import {ADD_NUMBER,SUB_NUMBER} from './store/action/number'

function changeNumber(){
  document.querySelector('#number').textContent=store.getState()
}

function add(){
  store.dispatch(ADD_NUMBER)
}

function sub(){
  store.dispatch(SUB_NUMBER)
}

changeNumber()
store.subscribe(()=>{
  changeNumber()
})

document.querySelector('#add').addEventListener('click',add)
document.querySelector('#sub').addEventListener('click',sub)