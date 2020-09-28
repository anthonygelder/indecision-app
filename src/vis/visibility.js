class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: true
        }

        this.toggleVisibility = this.toggleVisibility.bind(this)
    }


    toggleVisibility() {
        this.setState((previousState) => {
            return {

                toggle: !previousState.toggle
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Toggle Vis</h1>
                <button onClick={this.toggleVisibility}>{this.state.toggle ? "Toggle Off" : "Toggle On"}</button>
                {this.state.toggle && <p>Hey, this is on.</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))