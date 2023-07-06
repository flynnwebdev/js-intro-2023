// Python
// class Person:
//   def __init__(name, age):
//     self.name = name
//     self.age = age

// function Person(name, age) {
//   this.name = name
//   this.age = age
//   this.greet = () => {
//     console.log(`${this.name} is ${this.age} years old.`)
//   }
// }

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   greet() {
//     console.log(`${this.name} is ${this.age} years old.`)
//   }
// }

// const person = new Person('Matt', 50)

// person.greet()
// console.log(person)

class Rectangle {
  #width
  #height

  constructor(width, height) {
    this.#width = width
    this.#height = height
  }

  get area() {
    return this.#width * this.#height
  }

  get width() {
    return this.#width
  }

  set width(value) {
    if (typeof value === 'number') {
      this.#width = value
    }
  }
}

// Python
// class Square(Rectangle):

class Square extends Rectangle {
  constructor(size=10) {
    super(size, size)
  }
}

const sq = new Square(size=5)
console.log(sq.area)
