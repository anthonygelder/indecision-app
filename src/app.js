console.log('app')


let app = {
    title: 'Title',
    subtitle: 'Great title',
    options: ['One', 'Two']
}

let template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options." : "No Options"}</p>
        </div>
)

let user = {
    name: 'Anthony',
    age: 19,
    location: ''
}

let template2 = (
    <div>
        <h1>{user.name}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        <p>Location: {user.location ? user.location : 'Place'}</p>

    </div>
)


let appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)