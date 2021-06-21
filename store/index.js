// import { createStore } from '../node_modules/redux/es/redux.js'
import { createStore } from 'redux'
import reducer from './reducer/number'

// 通过createStore函数创建store，传入参数中第一个是reducer，第二个是初始的state值（可省略）
const store = createStore(reducer,0)
export default store