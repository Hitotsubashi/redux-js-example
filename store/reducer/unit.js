const reducer = (state='m',action)=>{
  switch (action.type) {
    case 'CHANGE_UNIT':
      return action.unit
    default:
      return state
  }
}

export default reducer