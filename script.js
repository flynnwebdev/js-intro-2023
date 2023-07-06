const x = [1, 2, 3, 3.14159, true, 'Hello']

console.log(x.includes('fdgdfg'))

// Python
// def add(x, y):
//   return x + y
// function add(x, y) {
//   return x + y
// }
// const numbers = [12, 50, 44, 32, 2]

// const Utils = {
//   add: (x, y) => x + y,
//   doubler: arr => arr.map(x => x * 2)  
// }

// console.log(Utils.add(5, 10))
// console.log(Utils.doubler(numbers))

// const people = ['Matt', 'Glen', 'Mary', 'Kate']

// const [a, b, ...others] = people

// // const first = people[0]
// // const second = people[1]

// console.log(a, b, others)

const bobBirds = ['Robin', 'Crow']
const sallyBirds = ['Bluejay', 'Cardinal']

const allBirds = [...bobBirds, ...sallyBirds, 'Magpie']

console.log(allBirds)
