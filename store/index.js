// import { createStore } from '../node_modules/redux/es/redux.js'
import { createStore,applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from './middleware/logger'

const store = createStore(reducer,{number:3,unit:'mm'},applyMiddleware(logger))
export default store