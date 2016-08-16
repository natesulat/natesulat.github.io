/*
  Please add all Javascript code to this file.
*/

/* FOR THE SWEET LOVE OF GOD, SHOW ME HOW TO MAKE THIS LESS MESSY */

var feedObj = {},
    articles = [];

moment.locale();

$('#popUp').removeClass('hidden');

$.when(
    $.get('https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json', function (res) {
        var diggFeed = res.data.feed;
        $.each(diggFeed, function (i, t) {
            var obj = {},
                tags = [];
            $.each(t.content.tags, function (j, u) {
                tags.push(u.slug);
            });
            obj.src = 'digg';
            obj.title = t.content.title;
            obj.excerpt = t.content.description;
            obj.url = t.content.url;
            obj.juju = t.digg_score;
            obj.tags = tags;
            obj.img = t.content.media.images[0].original_url;
            obj.pubDate = moment.unix(t.date_published).format('llll');
            articles.push(obj);
        });
    }),
    $.get('https://www.reddit.com/top.json', function (res) {
        var redditFeed = res.data.children;
        $.each(redditFeed, function (i, t) {
            var $r = redditFeed[i].data,
                obj = {};
            obj.src = 'reddit';
            obj.title = $r.title;
            obj.excerpt = null;
            obj.url = '//www.reddit.com' + $r.permalink;
            obj.juju = $r.score;
            obj.tags = $r.subreddit;
            obj.img = $r.preview ? $r.preview.images[0].source.url : 'https://camo.githubusercontent.com/b13830f5a9baecd3d83ef5cae4d5107d25cdbfbe/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3732313033382f313732383830352f35336532613364382d363262352d313165332d383964312d3934376632373062646430332e706e67';
            obj.pubDate = moment.unix($r.created).format('llll');
            articles.push(obj);
        });
    }),
    $.get('https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json', function (res) {
        var mashFeed = res.hot;
        $.each(mashFeed, function (i, t) {
            var obj = {};
            obj.src = 'mashable';
            obj.title = t.title;
            obj.excerpt = t.excerpt;
            obj.url = t.link;
            obj.juju = t.shares.total;
            obj.tags = t.channel;
            obj.img = t.image;
            obj.pubDate = moment(t.post_date).format('llll');
            articles.push(obj);
        })
    })
).then(function () {
    feedObj.articles = articles;
    var template = Handlebars.compile($('#article-template').html());
    $('#popUp').addClass('hidden');
    $('#main').append(template(feedObj));
    $('#main article').click(function (e) {
        e.preventDefault();
        var id = parseInt($(this).attr('id'));
        $('#popUp h1').html(feedObj.articles[id].title);
        $('#popUp p').html(feedObj.articles[id].excerpt);
        $('#popUp .popUpAction').attr('href', feedObj.articles[id].url);
        $('#popUp').removeClass('hidden');
        setTimeout(function() {
            $('#popUp').removeClass('loader');
        }, 750);
    });
});

$('.closePopUp').click(function(e) {
    e.preventDefault();
    $('#popUp').addClass('hidden loader');
});

$('header .container > a').click(function(e) {
    e.preventDefault();
    $('#main article').show();
});

// It's 2:45 am. I'm giving up on the bonuses.

//$('#search a').click(function(e) {
//    e.preventDefault();
//    $('#search').toggleClass('active');
//});
//
//$('#search input').on('change', function(){
//   if ($('#main article h3').text().indexOf($('#search input').val()) === -1) {
//       $(this).hide();
//   } 
//});

$('#source-menu li').click(function (e) {
    e.preventDefault();
    var id = $(this).children('a').attr('id');
    if (id === 'digg') {
        $('#main article').hide();
        $('#main .digg').show();
    } else if (id === 'reddit') {
        $('#main article').hide();
        $('#main .reddit').show();
    } else {
        $('#main article').hide();
        $('#main .mashable').show();
    }
    $('#main').focus();
});
