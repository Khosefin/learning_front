var userNumber = Number(prompt('Enter The Number: ', 0)) // 142
var sum = 0

for (var i = 0 ; (userNumber / 10) != 0 ; i++) {
	// Codes

	sum = sum + (userNumber % 10)
	userNumber = Math.floor(userNumber / 10)
}

console.log('Sum Of Digits: ', sum)