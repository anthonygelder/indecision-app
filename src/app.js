class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: ['thing one', 'thing two', 'thing three', 'hello']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    // handleAddOption(option) {
    //     this.setState((prevState) => {
    //         return {
    //             options: prevState.options.push(option)
    //         }
    //     })
    // }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomNum])
    }
    render() {
        return (
            <div>
                <Header />
                <Action hasOptios={this.state.options.length > 0} 
                        handlePick={this.handlePick}
                            />
                <Options options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecion</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptios}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>{this.props.optionText}</p>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.option.value.trim()

    if(option) {
        e.target.elements.option.value = ''
        console.log(option)
    }
    }    
    render() {
        return (
            <form onSubmit={this.handleAddOption}>  
                <input type='text' name="option"></input>
                <button>Add option</button>
            </form>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))