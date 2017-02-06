(function() {
    'use strict';
    angular
        .module('app', [
            'app.core',
            'app.features.comments'
        ])
        .config(config);


    config.$inject = ['$urlRouterProvider']

    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }
}());
