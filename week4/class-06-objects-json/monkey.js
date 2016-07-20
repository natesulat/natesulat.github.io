/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

var Monkey = function(name, species, foodsEaten) {
	this.name = name;
	this.species = species;
	if (typeof foodsEaten === 'string') {
		this.foodsEaten = foodsEaten;
	} else if (Array.isArray(foodsEaten)) {
		this.foodsEaten = foodsEaten.join(' and ');
	}
	this.eatSomething = function (str) {
		console.log(this.name + ' ate a ' + str);
	}
	this.introduce = function () {
		console.log('Hi! My name is ' + this.name + '. I am a ' + this.species + ' monkey, and I\'ve eaten ' + this.foodsEaten + '.');
	}
}

var fatCat = ['cake', 'brownies', 'a whole bunch of lasagna'];

var Achilles = new Monkey('Achilles', 'spider', 'the hearts of Trojans');
var Garfield = new Monkey('Garfield', 'president', fatCat);
var George = new Monkey('George', 'curious', 'a pretzel');

Garfield.introduce();