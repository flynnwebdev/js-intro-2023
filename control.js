// Python
// age = 16
// if age >= 18:
//   print('Adult')
// elif age >= 13:
//   print('Teen')
// else:
//   print('Child')

const age = 17

if (age >= 18) {
  console.log('Adult')
} else if (age >= 13) {
  console.log('Teen')
} else {
  console.log('Child')
}

// Python - Ternary operator
// message = 'Allowed' if age >= 18 else 'Not Allowed'

// const message = age >= 18 ? 'Allowed' : 'Not Allowed'

// Python
// match name:
//   case 'Matt':
//     pass
//   case 'John':
//     pass
//   else:
//     pass

// const favBird = 'Pigeon'

// switch (favBird) {
//   case 'Raven':
//   case 'Crow':
//     console.log('You like crows!')
//     break
//   case 'Robin':
//     console.log('You like robins!')
//     break
//   default:
//     console.log('Unknown bird!')
// }

// let count = 3

// while (count > 0) {
//   console.log(count--)
// }

// Python
// for i in range(10):
//   print(i)

// Three-part for loop
// for (initializer; condition; post-iteration) { }
// initializer - executed once, prior to the first iteration
// condition - executed every iteration, prior to the iteration
// post-iteration - executed every iteration, after the iteration

// for (let i=1, x=0; i <= 10; i+=2, x++) {
//   console.log(i, x)
// }

// console.log("Fibonacci")
// for (let prev=1, next=1; next <= 1000; tmp=next, next=prev+next, prev=tmp) {
//   console.log(next)
// }

const favFoods = ['pizza', 'pasta', 'tacos']

// for food in favFoods:
// for (let index in favFoods) {
//   console.log(`${parseInt(index)+1}. ${favFoods[index]}`)
// }

favFoods.forEach((food, index) => {
  console.log(`${index+1}. ${food}`)
})


arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

for (let i=0, col=0, row=0; i < arr.length * arr[0].length; row = Math.floor(++i / arr[0].length), col = i % arr[0].length) {
  console.log(arr[row][col])
}
