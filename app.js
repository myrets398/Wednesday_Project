angular.module("Wednesday_Project", ['ui.router']);
//w3schools.com
app.controller("mainCtrl", function($scope) {
    $scope.products = ["Hyundai", "Volvo", "GMC"];
    $stateProvider.state('Cars', {
        template: '<h1> CARS YOU SHOULD OWN</h1>'// $stateProvider
        //     .state('report', {
        //             views: {
        //                 'models'
        //                 ': {
        //                 templateUrl: 'report-filters.html',
        //                 controller: function($scope) {
        //                     mainCtrl
        //                 }
        //             },
        //             'prices': {
        //                 templateUrl: 'report-table.html',
        //                 controller: function($scope) {
        //                     mainCtrl
        //                 }
        //             },
        //             'value out of score of 10': {
        //                 templateUrl: 'report-graph.html',
        //                 controller: function($scope) {
        //                     mainCtrl
        //                 }
        //             }
    })

});
