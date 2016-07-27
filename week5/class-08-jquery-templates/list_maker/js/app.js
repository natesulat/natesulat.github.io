// Users should be able to:
// 1. Enter an item into #new-item
// 2. Submit the form #item-form (remember to prevent the form's default behavior!)
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #new-item should clear


// Bonus: Focus on #new-item after the item is added
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user
// Legendary Bonus: Remove individual <li> elements when they are clicked

// similar to window.onload
$(document).ready(function() {

    var initArray = {
        initItems: [
            'Data types',
            'Array',
            'Objects',
            'Functions'
        ]
    }
    var newItems = {};

    var initListTemplate = $('#newTemplate').html();
    var compiledList = Handlebars.compile(initListTemplate);
    var newList = compiledList(initArray);
    $('#list').append(newList);


    $('#item-form').submit(function(e) {
        e.preventDefault();
        newItems.newItem = $('#new-item').val();
        var compileNewItem = Handlebars.compile($('#newListItem').html());
        $('#list').append(compileNewItem(newItems));
        // if ($('#new-item').val().trim() !== '') {
        //     $('#list').append('<li>' + $('#new-item').val() + '</li>');
        //     $('#new-item').val('').focus();
        // } else {
        // 	alert('You didn\'t enter anything, dummy!');
        // }
    });
    $('#list').on('click', 'li', function() {
    	$(this).remove();
    });
});