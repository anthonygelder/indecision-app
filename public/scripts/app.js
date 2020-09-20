'use strict';

console.log('app');

var app = {
    title: 'Title',
    subtitle: 'Great title',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options." : "No Options"
    )
);

var user = {
    name: 'Anthony',
    age: 19,
    location: ''
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location ? user.location : 'Place'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
