var models = {};

models.hello = function (word) {
    console.log("Hello", word)
}

models.listing = function (list,target) {
    for (i = 0; i < list.length; i++) {
        $(target).append('<li>' + list[i] + '</li>');
    }
}