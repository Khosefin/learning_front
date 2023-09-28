// Obj Dest


// let user = [1, 'ali', 21, 'Tehran']


// let [userID, userName, userAge, userCity = 'Tabriz'] = user

// console.log(userID);
// console.log(userName);
// console.log(userAge);
// console.log(userCity);

/////////////////////////////////////////////////////////////////////

let user = {
    id: 1,
    // name: 'Ali',
    age: 22
}

// let id = user.id
// let name = user.name
// let age = user.age

let { age, name = 'amin', id: userID } = user

// console.log(userID);
// console.log(name);
// console.log(age);

/////////////////////////////////////////////////////

let users = [
    { id: 1, name: 'ali', age: 22, email: 'ali@gmail.com' },
    { id: 2, name: 'amin', age: 20, email: 'amin@gmail.com' },
    { id: 3, name: 'qadir', age: 18, email: 'qadir@gmail.com' },
    { id: 4, name: 'sasan', age: 32, email: 'sasan@gmail.com' },
]

const getUser = userID => {

    let mainUser = users.find(user => user.id == userID)

    return mainUser
}

// let {name: userName, email: userEmail} = getUser(4)

// console.log("UserName:", userName);
// console.log("UserEmail:", userEmail);


/////////////////////////////////////////////////////////////////////


const userIDInput = document.querySelector('#user-id')

userIDInput.addEventListener('keypress', event => {
    let { keyCode, target: input } = event

    if (keyCode === 13) {
        let { name, email } = getUser(input.value)

        console.log("UserName:", name);
        console.log("UserEmail:", email);
    }

})