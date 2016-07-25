/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (hint: appendChild)

- Also, when a new item is added to the list, clear the input box.

*/

function addToList(list, newThing) {
    list.appendChild(newThing);
}

window.onload = function () {
    var myList = document.getElementById('fav-list');
    var newThing = document.getElementById('new-thing').value;
    document.getElementById('new-thing').onchange = function () {
        newThing = this.value;
    }
    document.getElementById('new-thing-button').onclick = function () {
        if (newThing.trim() !== '') {
            var newItem = document.createElement('LI');
            var input = document.createTextNode(newThing);
            var newListItem = newItem.appendChild(input);
            addToList(myList, newListItem);
        } else {
            alert('You must type in a value!');
        }
    }
};

/*

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/