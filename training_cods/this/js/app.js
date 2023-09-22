// this

function removeListItem (el) {

    el.remove()

    console.log(el);
}

// /////////////////////////////////////////////////////

function sumNumbers () {

    let sum = 0

    for (let arg of arguments) {
        sum += arg
    }

    console.log('This in function:', this);

    return sum
}

// console.log('Sum:', sumNumbers(2, 5, 3));

// /////////////////////////////////////////////////////

let user = {
    id: 1, 
    name: 'Amin',
    age: 22,

    walk: function () {
        console.log('User Walked');
    },

    showThis: function () {
        console.log(this)
    },

    setName: function (newName) {
        this.name = newName
    },

    setAge: function (newAge) {
        this.age = newAge
    }
}

user.setName('Ali')
user.setAge(25)

console.log(user);