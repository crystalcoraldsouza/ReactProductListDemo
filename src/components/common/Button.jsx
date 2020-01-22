import React, { Component } from 'react'

class Button extends Component {
    render() {
        const { options, disabled, name, size, buttonClass, required, autoFocus, value } = this.props
        return (
            <button type='button' className={'button ' + buttonClass} disabled={disabled} name={name} value={value} required={required}>{value}</button>
        )
    }
}

export default Button