/*

In the index.html file there is a "Get Citi Bike Data" button.
When the user clicks the button, pull data from the provided resource: https://feeds.citibikenyc.com/stations/stations.json
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

*/

window.onload = function () {
	document.getElementById('getDataButton').onclick = makeRequest;
	function makeRequest() {
		// console.log('Something happened');
		var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';

		// $.get(url, function(res) {
		// 	console.log(res);
		// });

		$.ajax({
			url: url,
			type: 'GET',
			success: function(res) {
				console.log(res);
			},
			error: function(res) {
				console.log('error');
			}
		})
		// var httpRequest = new XMLHttpRequest();


		// httpRequest.onreadystatechange = responseFunction;


		// httpRequest.open('GET', url);
		// httpRequest.send();

		// function responseFunction() {
		// 	console.log('ready state change fired');
		// 	if (httpRequest.readystate === XMLHttpRequest.DONE) {
		// 		if (httpRequest.status === 200) {
		// 			console.log(httpRequest.response);
		// 		} else {
		// 			console.log('You will get nothing. And like it.');
		// 		}
		// 	}
		// };
	};
};

// window.onload = function () {
//    document.getElementById('getDataButton').onclick = makeRequest;
//    function makeRequest() {
//        console.log('Something happened');
//        var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';
//        var httpRequest = new XMLHttpRequest();


//        httpRequest.onreadystatechange = responseFunction;

//        httpRequest.open('GET', url);
//        httpRequest.send();

//        function responseFunction() {
//            console.log(httpRequest)
//            console.log('ready state change fired');
//            if (httpRequest.readystate === XMLHttpRequest.DONE) {
//                if (httpRequest.status === 200) {
//                    console.log(httpRequest);
//                } else {
//                    console.log('You will get nothing. And like it.');
//                }
//            }
//        };
//    };
// };


