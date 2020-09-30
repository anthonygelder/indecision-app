class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
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
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({ 
            options: [] 
        }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }
    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))                            
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomNum])
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

App.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: "Indecion"
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
            {props.options.length === 0 && <p>Add an option</p>}
            {props.options.map((option) => <Option handleDeleteOption={props.handleDeleteOption} key={option} optionText={option}/>)}
            <button onClick={props.handleDeleteOptions}>Remove all</button>
        </div>
    )
}

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

ReactDOM.render(<App/>, document.getElementById('app'))