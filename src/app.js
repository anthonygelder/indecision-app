class App extends React.Component {
    render() {
        const title = 'mytitle'

        const options = ['thing one', 'thing two', 'thing three', 'hello']
        return (
            <div>
                <Header title={title}/>
                <Action />
                <Options options={options}/>
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
                <h1>{this.props.title}</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        console.log('hello')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        console.log('remove')
    }
    render() {
        return (
            <div>
                {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
                <p>Options Component</p>
                <button onClick={this.handleRemoveAll}>Remove all</button>
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

        const option = e.target.option.value

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