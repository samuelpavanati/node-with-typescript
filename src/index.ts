let numberType: number
let booleanType: boolean
let arrayType: number[]

arrayType = [10, 20, 30]

let objectType: {
  firstName: string;
  lastName: string;
  age: number;
  isMusician: boolean;
}

const stringType = 'Samuel'

numberType = 10
numberType = 0o12
numberType = 0xA
numberType = 0b1010
numberType = 3.14

booleanType = false
booleanType = true

objectType = {
  firstName: 'Samuel',
  lastName: 'Nascimento',
  age: 27,
  isMusician: true,
}

const fullName = objectType.firstName + ' ' + objectType.lastName

let arrayOfObjectType = [
  {objectType}, 
  {objectType},
  {booleanType},
  {
    firstName: 'Samuel',
    lastName: 'Nascimento',
    age: 27,
    isMusician: true,
  },
];

console.log('HAHAHA', arrayOfObjectType)

console.log(numberType)
console.log(stringType.toUpperCase())
console.log(booleanType)
console.log(objectType)
console.log(objectType.firstName)
console.log(fullName);
console.log(`${objectType.firstName} ${objectType.lastName}`)
console.log(arrayType, arrayType[0])


// interface
// function
function add(a: number, b: number): number {
  return a + b
}
const add2 = (a: number, b: number): number => a + b
console.log(add2(3, 7))

function ret(test?: any): number {
  if (test === undefined) {
    return 1
  }
  return 0
}
console.log(ret(1))

const addSub = (per: number = 1): number => {
  return per
}
console.log(addSub());

const calcTotal = (numbers: number[]): number => {
  let total = 0
  // numbers.forEach(num => total += num)
  numbers.forEach(num => {
    return total += num
  })
  return total
}
console.log(calcTotal([1,2,3]))

// rest params
const restTest = (...test: number[]): number => {
  let total = 0
  test.forEach(num => total += num)
  return total
}
console.log(restTest(1, 2));


// class
// zod
// fastify
// prisma


 