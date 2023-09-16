// DOM => Document Object Model
// BOM => Browser Object Model

let userInfo = document.querySelector('h1')

let users = [
    {id: 1, name: 'Amin', age: 21},
    {id: 2, name: 'Amir', age: 23},
    {id: 3, name: 'Ali', age: 24},
    {id: 4, name: 'Hasan', age: 19},
    {id: 5, name: 'Babak', age: 29},
    {id: 6, name: 'Reza', age: 32},
]

let locationSearch = location.search

// Bad Way
// location.search.slice(1).split('=')[1]

// Good Way
let locationSearchParams = new URLSearchParams(locationSearch)
let userIDParam = locationSearchParams.get('id')

let mainUser = users.find(function (user) {
    return user.id == userIDParam
})

if (mainUser) {
    userInfo.innerHTML = 'Name: ' + mainUser.name + ' | Age: ' + mainUser.age
} else {
    userInfo.innerHTML = 'User Is Not Defined :('
}

console.log(mainUser);