import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'

class IndecisionApp extends React.Component {
    state = {
        options: []
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ 
            options: [] 
        }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))                            
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomNum])
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
    
            if(options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {

        }
    }
    render() {
    const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptios={this.state.options.length > 0} 
                        handlePick={this.handlePick} />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

export default IndecisionApp