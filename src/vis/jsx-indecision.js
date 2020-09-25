let app = {
    title: 'Title',
    subtitle: 'Great title',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    console.log(app.options)
    const option = e.target.elements.option.value

    if(option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
    }
}

const wipe = () => {
    app.options = []
    renderApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}


let appRoot = document.getElementById('app')


const renderApp = () => {
    let template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options." : "No Options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={wipe}>Remove all options</button>


            <ol>
            {
                app.options.map((opt) => {
                    return <li key={opt}>{opt}</li>
                })
            }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add</button>
            </form>
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}

renderApp()
