// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0
for (i = 99; i > 0; i--) {
	var lyrics = i + ' bottles of beer on the wall, ' + i + ' bottles of beer! You take one down. You pass it around. ' + (i - 1) + ' bottles of beer on the wall!';
	console.log(lyrics);
}