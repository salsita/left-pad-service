import React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'

import reducer from '../reducers/rootReducer'
import { initStore } from '../store'

import Options from '../containers/Options'
import PaddedText from '../containers/PaddedText'

export default class LeftPad extends React.Component {

  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducer, undefined, isServer)
    return { initialState: store.getState(), isServer }
  }

  constructor(props) {
    super(props)
    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render() {
    return <div>
      <Head>
        <title>Left pad</title>
        <link href="https://fonts.googleapis.com/css?family=Questrial" rel="stylesheet"/>
        <link rel="stylesheet" href="/static/normalize.css"></link>
        <link rel="stylesheet" href="/static/style.css"></link>
      </Head>
      <Provider store={this.store}>
        <div className="page">
          <header>
            <h1>Left Pad</h1>
          </header>
          <Options/>
          <PaddedText/>
        </div>
      </Provider>
    </div>
  }
}
