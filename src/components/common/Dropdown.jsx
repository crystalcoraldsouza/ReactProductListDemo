import React, { Component } from 'react'

class Drowdown extends Component {
    render() {
        const { options, disabled, name, size, selectClass, required, autoFocus, placeholder } = this.props
        return (
            <select className={'select-dropdown ' + selectClass} disabled={disabled} name={name} required={required}>
                {placeholder && <option value='' default>{placeholder}</option>}
                {options.map((val, key) => {
                    return (
                        <option value={val} key={key} className='select-option'>{val}</option>
                    )
                })}
            </select>
        )
    }
}

export default Drowdown