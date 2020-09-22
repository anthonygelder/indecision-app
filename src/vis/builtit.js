let app = {
    visible: false
}


const toggle = () => {
    app.visible = !app.visible
    renderApp()
}


let appRoot = document.getElementById('app')


const renderApp = () => {
    const template = (
        <div>
            <h1>Toggle visibility</h1>
            <button onClick={toggle}>{app.visible ? "Hide" : "Show"}</button>

            {app.visible && <p>This is visible</p>}
        </div>
    )

    ReactDOM.render(template, appRoot)
}

renderApp()