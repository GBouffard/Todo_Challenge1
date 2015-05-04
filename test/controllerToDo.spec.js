describe('ControllerToDo', function() {

  beforeEach(module('toDoapp'));
    var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ControllerToDo');
  }));

  it('has no task in the in the add a task box when created', function() {
    expect(ctrl.newTask).toBeUndefined();
  });
});