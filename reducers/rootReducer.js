
export default (state, { type, payload }) => {
  if (type === 'OPTIONS_CHANGED') {
    return {
      ...state,
      options: payload
    }
  }
  return state  
}
