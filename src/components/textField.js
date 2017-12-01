import React, { Component} from 'react'

class TextField extends Component {
  render() {
    return(
      <input
        className="textField"
        type="text"
        value={this.props.text}
        onChange={this.props.onChange}
      />
    )
  }
}

export default TextField;
