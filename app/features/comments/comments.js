(function() {
    'use strict';

    angular
        .module('app.features.comments')
        .controller('CommentsController', CommentsController);

    CommentsController.$inject = ['$scope'];

    function CommentsController($scope) {
        var vm = this;
        vm.msg = "Comments working!";
    }

}());
