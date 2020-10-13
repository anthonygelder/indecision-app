import React from 'react'

class AddOption extends React.Component {
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault()
        const option = e.target.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({
            error 
        }))

        if(!error) {
            e.target.elements.option.value = ''

        }
    }    
    render() {
        return (
            <div>
            <form className="add-option" onSubmit={this.handleAddOption}>  
                <input className="add-option__input" type='text' name="option"></input>
            <button className="button">Add option</button>
            </form>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            </div>
        )
    }
}

export default AddOption