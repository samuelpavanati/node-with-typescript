let array: Array<number>

array = [1, 2, 3]

for (const item of array) {
	console.log(item)
}

array = [3, 2, 1]

for (let i = 0; i < array.length; i++) {
	console.log(array[i])
}