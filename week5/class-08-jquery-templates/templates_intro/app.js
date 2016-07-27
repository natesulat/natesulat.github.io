var presidentObject = {
    presidents: [
        'Washington',
        'Adams',
        'Jefferson',
        'Madison',
        'Monroe',
        'Adams',
        'Jackson',
        'Van Buren',
        'Harrison',
        'Tyler',
        'Polk',
        'Taylor',
        'Fillmore',
        'Pierce',
        'Buchanan',
        'Lincoln',
        'Johnson',
        'Grant',
        'Hayes',
        'Garfield',
        'Arthur',
        'Cleveland',
        'Harrison',
        'Cleveland',
        'McKinley',
        'Roosevelt',
        'Taft',
        'Wilson',
        'Harding',
        'Coolidge',
        'Hoover',
        'Roosevelt',
        'Truman',
        'Eisenhower',
        'Kennedy',
        'Johnson',
        'Nixon',
        'Ford',
        'Carter',
        'Reagan',
        'Bush',
        'Clinton',
        'Bush',
        'Obama',
    ]
}

presidentObject.presidents.forEach(function(i) {
    $('#jquery-list').append('<option>' + i + '</option');
});

var titleObj = {
    title: 'US Presidents',
    description: 'A JSD Project'
};

var titleSource = $('#title-template').html();
var titleCompiled = Handlebars.compile(titleSource);

var titleTemplate = titleCompiled(titleObj);
var title = $('#title').append(titleTemplate);


var listSource = $('#president-list').html();
var compilePresidents = Handlebars.compile(listSource);
var menuTemplate = compilePresidents(presidentObject);
var selectMenu = $('#handlebars-list').append(menuTemplate);