import React from 'react'

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}>
                Delete
            </button>
        </div>
    )
}

export default Option