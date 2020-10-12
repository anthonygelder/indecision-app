import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h1 className="widget-header__title">Your Options</h1>
            <button className="button button--link" onClick={props.handleDeleteOptions}>Remove all</button>
        </div>
        {props.options.length === 0 && <p className="widget--message">Please add an option</p>}
        {props.options.map((option) => <Option handleDeleteOption={props.handleDeleteOption} key={option} optionText={option}/>)}
    </div>
)

export default Options