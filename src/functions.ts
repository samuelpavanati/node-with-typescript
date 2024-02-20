function add(a: number, b: number): number {
	return a + b
}
console.log('function add returns', add(3, 4))

const addWithConst = (a: number, b: number): number => a + b
console.log('function add2 returns', addWithConst(3, 7))
  
function ret(test?: number): number {
	if (test === undefined) {
		return 1
	}
	return 0
}
console.log('function ret returns ', ret(1))
  
const percentage = (per: number = 1): number => {
	return per
}
console.log('function percentage retuns ', percentage())
  
const calcTotal = (numbers: number[]): number => {
	let total = 0
	numbers.forEach(num => {
		return total += num
	})
	return total
}
console.log('function calcTotal retuns ', calcTotal([1,2,3]))
  
const restParams = (...values: number[]): object => { 
	let total = 0
	const array: number[] = []
	values.forEach(num =>	array.push(num))
	values.forEach(num => total += num)

	return {
		array,
		total
	}
}
console.log('function restParams returns ', restParams(1, 2, 3, 4))
  
  