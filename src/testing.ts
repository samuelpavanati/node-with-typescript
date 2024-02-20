interface User_1 {
  address(street: string, num: number): object

}

class Super implements User_1 {
  protected name: string
  protected age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  address(street: string, num: number): object {
    return [ this.name, this.age, street, num ]
  }
}

interface User_2 {
  name: string
  age: number
}

class SomeFunc implements User_2 {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  toString() {
    return [ this.name, this.age ]
  }
}

class ExtSomeFunc extends SomeFunc {
  getName() {
    return this.name
  }
}

const superUser = new Super('Samuel', 19)
const response = superUser.address('Street Lincoln', 123)
console.log(response);

const someFunc = new SomeFunc('Samuel', 20)
console.log(someFunc.toString())

const extSomeFunc = new ExtSomeFunc('Samuel', 20)
console.log(extSomeFunc.getName()) 