$('#makeitwork').click(function () {
    for (i = 99; i >= 0; i--) {
        if (i !== 0) {
            $('.masterlist').append('<li>' + i + ' bottles of beer on the wall, '
                i + ' bottles of beer! You take one down, pass it around, ' + i + ' bottles of beer on the wall!' + '</li>');
        } else {
            $('.masterlist').append('There aren\'t any bottles of beer on the wall, there aren\'t any bottles of beer! You can\'t take it down or pass it around, because you ran out of money on the previous 99 beers!');
        }
    }
});