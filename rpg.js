class Currency {
  #gold
  #silver
  #copper

  constructor(gold, silver, copper) {
    this.#gold = gold
    this.#silver = silver
    this.#copper = copper
  }

  get value() {
    return [this.#gold, this.#silver, this.#copper]
  }

  set value(value_array) {
    const [gold, silver, copper] = value_array
    this.#gold = gold
    this.#silver = silver
    this.#copper = copper
  }

  add(gold, silver, copper) {
    this.#gold += gold
    this.#silver += silver
    this.#copper += copper
  }

  addCurrency(other) {
    const [g, s, c] = other.value
    this.add(g, s, c)
  }

  // End-user readable representation of the object
  toString() {
    return `${this.#gold}G ${this.#silver}S ${this.#copper}C`
  }
}

class Character {
  constructor(name, race, health, attack) {
    this.name = name
    this.race = race
    this.health = health
    this.attack = attack
    this.wallet = new Currency(1, 2, 3)
  }

  battle(other) {
    console.log(`${this.name} launches a melee attack at ${other.name}!`)
  }
}

class Chest {
  constructor(items, gold, silver, copper) {
    this.items = items
    this.cash = new Currency(gold, silver, copper)
  }

  // Transfer chest contents to character
  loot(character) {
    character.wallet.addCurrency(this.cash)
    this.cash.value = [0, 0, 0]
  }
}


// Main
const aragorn = new Character('Aragorn', 'Human', 100, 50)
const galadriel = new Character('Galadriel', 'Elf', 120, 75, 200)
const frodo = new Character('Frodo', 'Hobbit', 50, 25)

galadriel.wallet.value = [10, 5, 2]
aragorn.wallet.value = [20, 50, 80]
frodo.wallet.value = [5, 25, 20]

console.log(aragorn)
aragorn.battle(galadriel)
console.log(`Frodo has ${frodo.wallet} in his filthy little pocketses!`)

chest = new Chest(['longsword', 'iron helm'], 2, 50, 10)

console.log(galadriel.wallet.value)
chest.loot(galadriel)
console.log(galadriel.wallet.value)
console.log(chest.cash.value)
