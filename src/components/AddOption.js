import React from 'react'

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: undefined
        }
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    handleAddOption(e) {
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
            <form onSubmit={this.handleAddOption}>  
                <input type='text' name="option"></input>
            <button>Add option</button>
            </form>
            {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}

export default AddOption