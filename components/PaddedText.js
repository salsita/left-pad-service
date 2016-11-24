import React from 'react'

export default (props) =>
  <div className="padded-text">
    { props.text.replace(/ /g, "\u00a0") }
  </div>
