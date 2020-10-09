import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        {props.options.length === 0 && <p>Add an option</p>}
        {props.options.map((option) => <Option handleDeleteOption={props.handleDeleteOption} key={option} optionText={option}/>)}
        <button onClick={props.handleDeleteOptions}>Remove all</button>
    </div>
)

export default Options