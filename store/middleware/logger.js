const logger = store => next => action => {
  console.info('dispatching', action.type)
  next(action)
}

export default logger