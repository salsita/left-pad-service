import { createStore } from 'redux'

import reducer from './reducers/rootReducer'

const initialState = {
  options: {
    char: ' ',
    width: 8,
    text: 'Hello!'
  }
}

export const initStore = (reducer, state = initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, state)
  } else {
    if (!window.store) {
      window.store = createStore(reducer, state,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    }
    return window.store
  }
}
