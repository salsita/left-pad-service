import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export default class Options extends React.Component {

  static propTypes = {
    char: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  onChangeChar = (ev) => {
    const { value } = ev.target
    this.setState({ char: value })
    this.props.onChange(value, this.props.width, this.props.text)
  }

  onChangeWidth = (ev) => {
    const { value } = ev.target
    this.setState({ width: value })
    this.props.onChange(this.props.char, value, this.props.text)
  }

  onChangeText = (ev) => {
    const { value } = ev.target
    this.setState({ text: value })
    this.props.onChange(this.props.char, this.props.width, value)
  }

  render() {
    const { char, width, text } = this.props;
    return <div>
      <div className="row">
        <label>Character</label>
        <select value={char} onChange={this.onChangeChar}>
          <option value=" "> </option>
          <option value=".">.</option>
          <option value="_">_</option>
          <option value="-">-</option>
          <option value="☂">☂</option>
          <option value="*">*</option>
        </select>
      </div>
      <div className="row">
        <label>Width</label>
        <input type="number" min={0} max={5000} value={width} onChange={this.onChangeWidth}></input>
      </div>
      <div className="row">
        <label>Text</label>
        <input type="text" value={text} onChange={this.onChangeText}></input>
      </div>
    </div>
  }
}
