import React, {Component} from 'react'

class Button extends Component {
  render () {
    const {disabled, name, buttonClass, required, value} = this.props
    return (
      <button type='button' className={'button ' + buttonClass} disabled={disabled} name={name} required={required}>{value}</button>
    )
  }
}

export default Button
