class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
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
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options Component</p>
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>Option</p>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <p>AddOption component here</p>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))