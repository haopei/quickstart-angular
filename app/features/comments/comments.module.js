(function() {
    'use strict';

    angular
        .module('app.features.comments', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider
            .state('comments', {
                url: '/comments',
                templateUrl: 'app/features/comments/comments.html',
                controller: 'CommentsController',
                controllerAs: 'vm'
            });
    }

}());
