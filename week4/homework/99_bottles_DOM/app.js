$('#makeitwork').click(function (e) {
    // I mean... just to be safe, or whatever
    e.preventDefault();
    for (i = 99; i >= 0; i--) {
        // lyric as variable so that I don't have to type it twice, and so I can do string replacement later
        var lyric = '<li>' + i + ' bottles of beer on the wall, ' + i + ' bottles of beer! You take one down, pass it around, ' + i + ' bottles of beer on the wall!' + '</li>';
        // One bottle ain't gonna be plural
        if (i === 1) {
            $('#masterlist').append(lyric.replace(/\bbottles\b/ig, 'bottle'));
        } 
        // The others are
        else if (i !== 0) {
            $('#masterlist').append(lyric);
        } 
        // Once there are no more bottles on the wall
        else {
            $('#masterlist').append('<li>There aren\'t any bottles of beer on the wall, there aren\'t any bottles of beer! You can\'t take it down or pass it around, because you ran out of money on the previous 99 beers!');
        }
    }
});