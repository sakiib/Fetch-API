console.log('Fetch API');
// URL = https://reqres.in/api/users

// <pending> promise
console.log(fetch('https://reqres.in/api/users'));
// fetch is promise based, so we can use async or .then

fetch('https://reqres.in/api/users')
    .then(res => console.log(res));
// body data is not directly accessible from res object
// we need to call a method to convert this res to json

// res.json() returns another promise, data = actual data
fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => console.log(data));

fetch('https://reqres.in/api/users')
    .then(res => {
        if (res.ok) {
            console.log('success');
        } else {
            console.log('not success');
        }
    });

// put the methods in options
// must do JSON.stringify() & pass the content type
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
}).then(res => {
    return res.json()
}).then(data => console.log(data))
  .catch(error => console.log(error));



