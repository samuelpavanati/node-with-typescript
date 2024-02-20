import z from 'zod'

const myObject = {
	firstName: 123
}

const newObject = z.object({
	firstName: z.coerce.string()
})

const anotherObject = newObject.parse(myObject)

console.log(anotherObject)