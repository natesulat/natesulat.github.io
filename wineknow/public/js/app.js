//var provider = new firebase.auth.GoogleAuthProvider();
//
//firebase.auth().signInWithRedirect(provider);
//
//firebase.auth().getRedirectResult().then(function (result) {
//    if (result.credential) {
//        var token = result.credential.accessToken;
//    }
//    var user = result.user;
//    console.log(user);
//}).catch(function (error) {
//    var errorCode = error.code;
//    var errorMessage = error.message;
//    var email = error.email;
//    var credential = error.credential;
//});

var wineKnow = angular.module('wineKnow', ['firebase']);

wineKnow.controller('theLog', ['$scope', '$firebaseArray', '$firebaseAuth', function ($scope, $firebaseArray, $firebaseAuth) {
//    $scope.auth = $firebaseAuth();
//    $scope.authObj.$signInWithRedirect("google").then(function () {
//        // Never called because of page redirect
//    }).catch(function (error) {
//        console.error("Authentication failed:", error);
//    });
//    $scope.authObj.$onAuthStateChanged(function (firebaseUser) {
//        if (firebaseUser) {
//            console.log("Signed in as:", firebaseUser.uid);
//        } else {
//            console.log("Signed out");
//        }
//    });
    var rootRef = firebase.database().ref().child('wines');
    var wineList = $firebaseArray(rootRef);
    $scope.wineList = wineList;
    $scope.wineData = {};
    $scope.addWine = function () {
        if (wineList) {
            wineList.$add($scope.wineData).then(function (ref) {
                console.log('Wine added');
            });
        } else {
            rootRef.ref('wines').push($scope.wineData);
        }
        $scope.wineData = {};
    };
//    $scope.sort = function(item) {
//        
//    }
}]);
