class tamgoachi{
  constructor(name,age, food){
    this.name = name
    this.age = age
    this.health = 100
    this.hunger = 100
    this.thirst = 100
    this.food = food
    this.knowledge = 0
  }
  eat(){
    this.hunger += 10
    console.log(`${this.name} says: I love eating ${this.food}`)
    return this
  }
  walk(){
    this.health += 20
    this.hunger -=10
    this.thirst -= 10
    console.log(`${this.name} says: Walking is fun!`)
    return this

  }
  reading(){
    this.knowledge += 10
    console.log(`${this.name} says: I'm Still reading...`)
    return this
  }
  status(){
    return console.table({
    health: this.health,
    hunger: this.hunger,
    thrist: this.thirst,
    age: this.age
  })
}
}

class characterOne extends tamgoachi {
  constructor(name, age,food, book){
    super(name,age, food)
    this.book = book
  }
  books(){
    console.log(`${this.name} only has this book: ${this.book} :in his bookshelf.`)
    return this
  }
  fly(){
    this.health += 10
    return this
  }
  whatIsYourage(){
    console.log(`${this.name} Says: My age is only ${this.age}! OkAY :D`)
    return this
  }


}

const Murachakitchi = new characterOne("Murachakitchi",1,'Biscuits','Noahs Flood')
Murachakitchi.eat().status()