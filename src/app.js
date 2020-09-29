class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomNum])
    }
    render() {
        return (
            <div>
                <Header />
                <Action hasOptios={this.state.options.length > 0} 
                        handlePick={this.handlePick} />
                <Options options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>Indecion</h1>
            <h2>Put your life in the hands of a computer</h2>
        </div>
    )
}


const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptios}>What should I do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            {props.options.map((option) => <Option key={option} optionText={option}/>)}
            <button onClick={props.handleDeleteOptions}>Remove all</button>
        </div>
    )
}

const Option = (props) => {
    return (
        <p>{props.optionText}</p>
    )
}

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
        e.target.elements.option.value = ''
        const error = this.props.handleAddOption(option)

        this.setState(() => {
            return { error }
        })
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

// const User = (props) => {
//     return (
//         <div>   
//             <p>Hello: {props.name}</p>
//         </div>
//     )
// }

ReactDOM.render(<App />, document.getElementById('app'))