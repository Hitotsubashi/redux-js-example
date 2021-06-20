// import { createStore } from '../node_modules/redux/es/redux.js'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer,{number:3,unit:'mm'})
export default store