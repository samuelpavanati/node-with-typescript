// let arrayType: number[]

// let objectType: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   isMusician: boolean;
// }
	
let numberType: number
numberType = 10
numberType = 0o12
numberType = 0xA
numberType = 0b1010
numberType = 3.14
console.log('numberType ', numberType)
	
let booleanType: boolean
booleanType = false
booleanType = true
console.log('booleanType ', booleanType)
	
const objectType = {
	firstName: 'Samuel',
	lastName: 'Nascimento',
	age: 27,
	isMusician: true,
}
const fullName = objectType.firstName + ' ' + objectType.lastName
console.log('objectType ', objectType)
console.log('objectType.firstName ', objectType.firstName)
console.log('fullName ', fullName)
console.log('fullName ', `${objectType.firstName} ${objectType.lastName}`)
	
const arrayOfObjectType = [
	{objectType}, 
	{objectType},
	{
		firstName: 'Samuel',
		lastName: 'Nascimento',
		age: 27,
		isMusician: true,
	},
	{booleanType},
]
console.log('arrayOfObjectType ', arrayOfObjectType)
	
const stringType = 'Samuel'
console.log('stringType ', stringType.toUpperCase())

const arrayType = [10, 20, 30]
console.log('arrayType', arrayType, arrayType[0])