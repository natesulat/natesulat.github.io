var list = document.getElementById('gaCampuses').querySelectorAll('li');

//Object.keys(list).forEach(function(i) {
//    list[i].innerHTML = list[i].innerHTML.split('').join('.') + '.';
//})

for(i in list) {
    list[i].innerHTML = list[i].innerHTML.split('').join('.') + '.';
}