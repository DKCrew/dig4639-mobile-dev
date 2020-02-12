class Pet {
    petSound;
    petFeeding;

    constructor (species) {
      this.species = species
    }

    speak () {
      return 'no words'
    }
}
class Cat extends Pet {
  constructor (props) {
    super('cat') // calls parent method by using Super
    this.props = props
  }

    clickHandler = parameter => parameter + this.props.name;
    // arrow function returns expression provided after
    speak () {
      this.clickHandler()
      return `${super.speak()} Meow, I am a ${this.species}`
    }
}
function makePetSpeak (pet) {
  console.log(pet.speak())
}

var myPet = new Pet()
makePetSpeak(myPet)

var myCat = new Cat({ name: 'Skrimbleshanks' })
makePetSpeak(myCat)
var newFunc = myCat.clickHandler
console.log(newFunc('My name is '))
