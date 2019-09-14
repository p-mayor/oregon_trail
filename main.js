function Traveler(name){
    this.name = name
    this.food = 100
    this.isHealthy = true
    this.hunt = function(){
        if(Math.random() > 0.5){
            this.food += 100
        } else {
            this.food += 0
        }
    }
    this.eat = function(){
        if(this.food > 20){
            this.food-=20
        } else {
            this.isHealthy = false
        }
    }
}
function Wagon(capacity){
    this.capacity = capacity
    this.passengers = []
    this.join = function(traveler){
        if(this.passengers.length < capacity){
            this.passengers.push(traveler)
        }
    }
    this.quarantine = function(){
        for(let i = 0; i < this.passengers.length; i++){
            if(!this.passengers[i].isHealthy){
                return true
            }
        }
        return false
    }
    this.food = function(){
        let totalFood = 0
        for(let i = 0; i < this.passengers.length; i++){
            totalFood+= this.passengers[i].food
        }
        return totalFood
    }
}








// test code:

// Create a wagon called 'wagon'
let wagon = new Wagon(5);
// Create a traveler with the name 'Henrietta' called 'traveler'
let traveler = new Traveler('Henrietta');
// Create a traveler with the name 'Juan' called 'traveler2'
let traveler2 = new Traveler('Juan');

traveler.hunt(); // maybe get more food
traveler2.eat();
traveler2.eat(); // juan is hungry
wagon.join(traveler);
wagon.join(traveler2);

console.log(wagon.quarantine()); // print true if someone is sick, false otherwise
console.log(wagon.food()); // print juan's food + henrietta's food

