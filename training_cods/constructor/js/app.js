function User (username, userAge, userJob) {
    this.name = username
    this.age = userAge
    this.job = userJob

    this.getName = function () {
        return this.name
    }

    this.getAge = function () {
        return this.age
    }

    this.getJob = function () {
        return this.job
    }

    this.setName = function (newName) {
        this.name = newName
    }

    this.setAge = function (newAge) {
        this.age = newAge
    }

    this.setJob = function (newJob) {
        this.job = newJob
    }

}

let userAli = new User('Ali', 19, 'Android Developer')

userAli.setAge(24)

console.log(userAli.getAge());