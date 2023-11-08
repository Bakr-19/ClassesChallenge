// class Person {
//   constructor (name, age,job){
//     //PROPERITES HERE
//     this.name = name
//     this.age = age
//     this.job = job
//   }
//   //Methods Here
//   talks(){
//     console.log(
//       `h1, my nameis ${this.name}, I am ${this.age} and i was work as ${this.job}`

//     )
    
//   }
//   work(){
//     console.log(`i am going to build a house, because i am a ${this.job}`)
//   }
// }

// //create a new instace of the class

// const Ben = new Person('Ben',41,'builder')

// Ben.talks()
// Ben.work()


// class Animals{
//   constructor(animal,name,age){
//     //Propertises
//     this.animal = animal
//     this.name = name
//     this.age = age
//   }

//   pets(){
//     console.log(`my pet is called ${this.name}, it is a ${this.animal} and it's age is ${this.age} years old `)
//     return this
//   }
//   fav(){
//     console.log(`my faviourite animal is ${this.animal} because its name is ${this.name}`)
//     return this
//   }
// }

// const pet = new Animals('Parrot','Adnan',3)
// const secondpet = new Animals('Chicken','Stupud',200)
// secondpet.pets().fav()


// class Animal{
//   constructor(name){
//     this.name = name
//     this.health = 100
//     this.hunger = 100
//   }
//   drinks() {
//     this.health += 5
//     return this
//   }
//   eats(){
//     this.health += 5
//     this.hunger += 10
//     console.log(`${this.name}'s health is ${this.health}`)
//     return this

//   }
//   stats(){
//     return console.table({
//       name: this.name,
//       health: this.health,
//     })
//   }
// }


// class Dog extends Animal {
//   constructor(name,happy){
//   //Dog Specific properties here
//     super(name)
//     this.happy = happy
//   }
  
//   playball(){
//     this.health += 10
//     this.hunger -10
//     console.log(`${this.name} is happy`)
//     return this
//   }
//   walks() {
//     console.log(`talking ${this.name} is happy`)
//     this.health += 10
//     return this
//   }



// }

// const bob = new Dog('bob', 'wags tail')
// bob.drinks().walks()
// bob.stats()



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