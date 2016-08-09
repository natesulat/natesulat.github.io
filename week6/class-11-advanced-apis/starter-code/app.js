$(function () {
    // DOM is now ready
    _500px.init({
        sdk_key: '36734947feb3eb47fbe53ee816a069bfd9542f3b'
    });

    _500px.on('authorization_obtained', function () {
        console.log("authorization obtained")
        $('.sign-in-view').hide();
        $('.image-results-view').show();

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                console.log('lat: ', lat);
                console.log('long: ', long);

                var radius = '25mi';

                var searchOptions = {
                    geo: lat + ',' + long + ',' + radius,
                    only: 'Landscapes',
                    image_size: 3,
                    rpp: 28,
                    sort: 'highest_rating'
                };

                _500px.api('/photos/search', searchOptions, function (response) {
                    console.log(response)
                    if (response.data.photos.length == 0) {
                        alert('No photos found!');
                    } else {
                        handleResponseSuccess(response);
                    }
                });
                
                _500px.api('/users', function (response) {
                    var me = response.data.user;
                    console.log('Loggin in: ', me);
                });
            });
        } else {
            $('.images').append('Sorry, the browser does not support geolocation');
        }
    });

    function handleResponseSuccess(response) {
        var allData = response.data.photos;

        $.each(allData, function () {
            var element = $('<img>').attr('src', this.image_url).addClass('image');
            $('.images').append(element);
        });
    }

    $('#login').click(function () {
        _500px.login();
    });

    _500px.getAuthorizationStatus();

});