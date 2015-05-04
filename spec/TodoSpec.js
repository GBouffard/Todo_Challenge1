describe('Todo', function(){
  var todo;
  beforeEach(function(){
    todo = new Todo();
  });

  it('has an empty list of tasks when created', function(){
    expect(todo.listOfTasks).toEqual([]);
  });

  it('can add tasks to its list', function(){
    todo.addTask('walk the dog');
    expect(todo.listOfTasks).toEqual(['walk the dog']);    
  });

  xit('knows that a new added task\'s state is not done (false) when created', function(){
  });

  xit('can replace the status of a task to done (true) when done', function(){
  });

  xit('cannot do a task if it\'s already been done', function(){
  });

  xit('can show all tasks and its number', function(){
  });

  xit('can show all active tasks and its number', function(){
  });

  xit('can show all completed tasks and its number', function(){
  });

  xit('can clear the full list of tasks', function(){
  });

  xit('can deleted all completed tasks', function(){
  });
});
