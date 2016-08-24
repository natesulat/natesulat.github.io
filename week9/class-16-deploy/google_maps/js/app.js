$(document).ready(function() {
    var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 40.7128,
                lng: -74.0059
            },
            zoom: 13
        });
    }

    initMap();

    moment.locale();

    $.get('http://api.citybik.es/citi-bike-nyc.json', function(res) {
    	var data = [];
    	res.forEach(function(i, t) {
    		data.push(t);
    	})
    }).done(function(data) {
    	dataManipulate(data);
    }).error(function() {
    	console.log('Ya done goofed');
    });

    function dataManipulate(x) {
    	x.forEach(function(i, t) {
    		var t = new google.maps.Marker({
    			position: {
    				lat: i.lat/1000000,
    				lng: i.lng/1000000
    			},
    			map: map,
    			title: i.name
    		});
    		var content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">' + i.name + '</h3>'+
            '<div id="bodyContent">'+
            '<p>Bikes available: ' + i.bikes + ', Free Spots: ' + i.free + '</p>' +
            '<p>Last updated: ' + moment(i.timestamp).format('llll') + '</p>' +
            '</div>'+
            '</div>';
            var infowindow = new google.maps.InfoWindow({
            	content: content,
            	maxWidth: 150
            });
    		t.addListener('mouseover', function() {
    			infowindow.open(map, t);
    		});
    		t.addListener('mouseout', function() {
    			infowindow.close();
    		});
    	});
    }

});
