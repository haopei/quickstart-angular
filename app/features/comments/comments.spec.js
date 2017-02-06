describe('comments', function() {

    // Load module before each test
    beforeEach(module('app.features.comments'));

    describe('CommentsController', function() {
        it('message says "Comments working!"', inject(function($componentController) {
            // retrieves the controller by name
            var ctrl = $componentController('CommentsController');
            expect(ctrl.msg).toBe('Comments working!');
        }));
    });
});
