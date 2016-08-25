//Instantiate an Angular Module
var fullMeanModule = angular.module('fullMeanModule', ['ngRoute']);

fullMeanModule.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/friends.html',
        //controller: friendsController,
        activeTab: 'friends'
    });
});
