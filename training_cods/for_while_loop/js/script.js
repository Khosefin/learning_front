///////////////// For ///////////////////

// var userFirstNumber = Number(prompt('Enter The First Number: ', 1)) // 2
// var userSecondNumber = Number(prompt('Enter The Second Number: ', 1)) // 3

// var power = 1

// // power = 8

// for (var i = 0 ; i < userSecondNumber ; i++) {
// 	power = power * userFirstNumber
// }

// alert('Power: ' + power)


///////////////// While ///////////////////

// var userFirstNumber = Number(prompt('Enter The First Number: ', 1)) // 2
// var userSecondNumber = Number(prompt('Enter The Second Number: ', 1)) // 3

// var power = 1

// // power = 8
// var i = 0
// while (i < userSecondNumber) {
// 	power = power * userFirstNumber
// 	i++
// }

// alert('Power: ' + power)

///////////////// Do While ///////////////////

var userFirstNumber = Number(prompt('Enter The First Number: ', 1)) // 2
var userSecondNumber = Number(prompt('Enter The Second Number: ', 1)) // 3

var power = 1

// power = 8
var i = 0

do {
	power = power * userFirstNumber
	i++
} while (i < userSecondNumber)

alert('Power: ' + power)