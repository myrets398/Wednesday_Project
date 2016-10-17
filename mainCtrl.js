angular.module("Wednesday_Project").controller("mainCtrl", function($scope,
    mainServ) {
    $scope.cars = [{
        "make": "Hyundai",
        "model": "Veloster",
        "price": "23700 ",
        "description": "It's sporty and affordable."
    }, {
        "make": "Toyota",
        "model": "Yaris",
        "price": "29700 ",
        "description": "It's nice and it's Japanese. You know they make good stuff."
    }, {
        "make": "Mitsubishi",
        "model": "Colt",
        "price": "33700 ",
        "description": "It's compact and destinctive."
    }, {
        "make": "GMC",
        "model": "Acadia",
        "price": "18700 ",
        "description": "It's a good value and domestic."
    }, {
        "make": "Volvo",
        "model": "V40",
        "price": "39700 ",
        "description": "It's sporty and also a Swedish engineered station wagon."
    }, {
        "make": "Infiniti",
        "model": "QX 30",
        "price": "35600 ",
        "description": "It's not so great; it's a poor value."
    }, ];

});
