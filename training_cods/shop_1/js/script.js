var allProducts = [
	{id: 1, name: 'Laptop', price: 17000000},
	{id: 2, name: 'Phone', price: 7000000},
	{id: 3, name: 'Pen', price: 12000},
	{id: 4, name: 'Pencil', price: 9000},
	{id: 5, name: 'Eraser', price: 6000},
	{id: 6, name: 'Milk', price: 35000},
]

var userBasket = [
	{id: 1, name: 'pen', price: 12000},
	{id: 2, name: 'pencil', price: 9000},
]

var userProduct = prompt("Enter The Name Of Product: ") // 'Phone'

var requestProduct;

var isInShop = allProducts.some(function (product) {
	if (product.name === userProduct) {
		requestProduct = product
		return true
	}
})


if (isInShop === true) {
	var newProduct = {
		id: 3,
		name: requestProduct.name,
		price: requestProduct.price
	}
	userBasket.push(newProduct)

	var sum = 0

	userBasket.forEach(function (product) {
		sum = sum + product.price
	})
	console.log(userBasket)
	alert("Total Price: " + sum)
} else {
	console.log("موجودی نیست")
}