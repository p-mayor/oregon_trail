The following code should work once you are finished:

```js
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

```

Create two different types of objects: a `Traveler` and a `Wagon`.

A `Traveler` has a few properties: an amount of `food` (number), a `name` (string), and an `isHealthy` (boolean).

A `Wagon` has a few properties as well: a `passengers` list (array) and a `capacity` (number).

## Operations
Write the following methods, 

### Traveler.hunt()
50% chance to increase the traveler's food by 100 (successful hunt), and 50% to increase it by 0 (unsuccessful hunt).

### Traveler.eat()
Consumes 20 of the traveler's food. If the traveler doesn't have 20 food, the traveler is no longer healthy.

### Wagon.join(traveler)
Add the `traveler` to the `wagon` if there is space. If there is not enough capacity, don't add them.

### Wagon.quarantine()
Return true if there is at least one unhealthy person in the wagon. Return false if not.

### Wagon.food()
Return the total amount of food among all occupants of the wagon.