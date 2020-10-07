import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))


class OldSyntax {
    constructor() {
        this.name = 'Hey'
    }
    getGreeting() {
        return `Hi my name is${this.name}`
    }
}

const oldSyntax = new OldSyntax()

console.log(oldSyntax.getGreeting())


// ------------

class NewSytax {
    name = 'Ho'
    getGreeting = () => {
        return `Hi my name is${this.name}`

    }
}

const newSyntax = new NewSytax()

console.log(newSyntax)