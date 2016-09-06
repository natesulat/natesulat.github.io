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

wineKnow.controller('theLog', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
    var rootRef = firebase.database().ref().child('wines');
    var wineList = $firebaseArray(rootRef);
    $scope.wineList = wineList;
    $scope.wineData = {};
    //debugger;
    $scope.addWine = function () {
        if (wineList) {
            wineList.$add($scope.wineData).then(function (ref) {
                console.log('Wine added');
            });
        } else {
            rootRef.ref('wines').push($scope.wineData);
        }
        $scope.wineData = {};
        $('#form input').eq(0).focus();
    };
    $scope.deleteWine = function (key) {
        wineList.$remove(key);
    };
    $scope.popup = false;
    $scope.editWine = function (key) {
        $scope.popup = true;
        $scope.wineToEdit = key;
        $scope.postEdits = function(key) {
            wineList.$save(key);
            $scope.popup = false;
        };
    };
    $scope.orderitems;
    $scope.sortClass = 'glyphicon glyphicon-minus';
    $scope.reverse = true;
    $scope.sortIt = function (o) {
        $scope.orderitems = o;
        if (!$scope.orderitems || $scope.reverse === true) {
            $scope.reverse = false;
            $scope.sortClass = 'glyphicon glyphicon-triangle-top';
        } else {
            $scope.reverse = true;
            $scope.sortClass = 'glyphicon glyphicon-triangle-bottom';
        }
    };
    $scope.clearSort = function () {
        $scope.orderitems = null;
        $scope.sortClass = 'glyphicon glyphicon-minus';
    };
}]);
