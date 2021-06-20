// import { createStore } from '../node_modules/redux/es/redux.js'
import { createStore } from 'redux'
import reducer from './reducer/number'

const store = createStore(reducer,0)
export default store