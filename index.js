import store from './store'
import {ADD_NUMBER,SUB_NUMBER} from './store/action/number'
import {CHANGE_UNIT} from './store/action/unit'

function changeNumber(){
  const {number,unit}=store.getState()
  document.querySelector('#number').textContent=`${number}${unit}`
}

function add(){
  store.dispatch(ADD_NUMBER)
}

function sub(){
  store.dispatch(SUB_NUMBER)
}

function changeUnit(unit){
  store.dispatch(CHANGE_UNIT(unit))
}

store.subscribe(()=>{
  changeNumber()
})

changeNumber()
document.querySelector('#add').addEventListener('click',add)
document.querySelector('#sub').addEventListener('click',sub)

document.querySelector('#m').addEventListener('click',()=>{changeUnit('m')})
document.querySelector('#cm').addEventListener('click',()=>{changeUnit('cm')})
document.querySelector('#mm').addEventListener('click',()=>{changeUnit('mm')})
