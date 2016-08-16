/*

Virtual Farm

Goal: You'll be creating a virtual farm whose animals can be clicked on to get an alert displaying their name and what sound they make

Instructions:

1) Create a top-level "FarmAnimal" object that all the other farm animals will inherit from
2) FarmAnimal must have "name", "sound", and "image" instance props, and a "talk" instance method (talk should alert the animal's name and its sound)
3) Create at least three different animals for your farm (remember to inherit from "FarmAnimal" by changing the "prototype" of your animals)

	- Give each animal a name, a sound, and an image (use the web and copy an image path)

4) Once you build your animal constructors, create an instance of each animal and push that instance into the "farmAnimals" array

	ex:

	new rooter = new Rooster('Roger');
	farmAnimals.push(rooster);

5) Lastly, iterate over the "farmAnimals" array and append each of your animals to the DOM
	- You will have to create a new DOM element (a <div> is recommended)
	- This new <div> needs to have the CSS class "animal"
	- Assign this <div> random "bottom" and "left" attributes (this is so animals do not overlap each other in the DOM)

		Hint: use %-based values (bottom: 50%; left: 25%)

	- This <div>'s background should be the animal's image

		Hint: background-image: url('http://some-url-here.com')

	- Each <div> should have a click event that alerts the name of the animal and the sound that it makes
	- Append each new <div> to the body

		Hint: $('body').append(yourElement)
*/


$(document).ready(function () {
    function FarmAnimal(name, sound, image) {
        this.name = name;
        this.sound = sound;
        this.image = image;
        this.talk = function () {
            alert('I am a ' + this.name + ' and I go ' + this.sound);
        }
    };

    var Lion = new FarmAnimal('Lion', 'roar', 'http://res.cloudinary.com/dk-find-out/image/upload/q_80,w_640/DCTM_Penguin_UK_DK_AL455926_tssini.png');
    var Rooster = new FarmAnimal('Rooster', 'cock-a-doodle-doo', 'https://shoshanakessock.files.wordpress.com/2015/09/o-rooster-crowing-facebook.jpg');
    var Kangaroo = new FarmAnimal('Kangaroo', 'g\'day', 'http://1.bp.blogspot.com/-7_lxmkpTnis/TmuNQ-q474I/AAAAAAAAADw/nl2GyewSmuk/s640/FunnyPart-com-drunk_kangaroo.jpg');
    // push all animal instances here
    var farmAnimals = [Lion, Rooster, Kangaroo];

    var spacing = [25, 50, 75];


    for (i = 0; i < farmAnimals.length; i++) {
        var template = '<div class="animal" id="' + i + '" style="bottom: ' + spacing[i] + '%; left: 25%; background-image: url(' + farmAnimals[i].image + ')"></div>';
        $('body').append(template);
    };
    
    // There HAS to be some way to assign this within the loop, but I beat my head against it for hours and couldn't find it
    // Callbacks/closures: not my forte, apparently
    
    $('.animal').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('id');
        farmAnimals[id].talk();
    })

});
