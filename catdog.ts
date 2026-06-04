class dog{
    bark(){
        console.log("woof");
    }
}

class cat{
    meow(){
        console.log("meow");
    }
}

function makeSound(animal: dog | cat): void {
    if (animal instanceof dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

const myDog = new dog();
const myCat = new cat();

makeSound(myDog);

