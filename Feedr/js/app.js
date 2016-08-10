/*
  Please add all Javascript code to this file.
*/

//var sources = ['Digg','Mashable','Reddit'];
//
//var listing = models.listing;
//listing(sources, '#search');


//sample helper function
var feedObj = {},
    articles = [];

// DIGG AJAX
$.ajax({
    url: 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json',
    type: 'GET',
    success: function (res) {
        var diggFeed = res.data.feed;
        $.each(diggFeed, function(i, t) {
            var $x = diggFeed[i],
                obj = {},
                tags = [];
            $.each($x.content.tags, function(j, u) {
                tags.push($x.content.tags[j].slug);
            })
            obj.title = $x.content.title;
            obj.excerpt = $x.content.description;
            obj.url = $x.content.url;
            obj.juju = $x.digg_score;
            obj.tags = tags;
            obj.img = $x.content.media.images[0].original_url;
            obj.pubDate = $x.date_published;
            articles.push(obj); 
        });
    },
    error: function() {
        console.log('digg error');
    }
});

console.log(articles);