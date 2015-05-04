describe('Todo', function(){
  var todo;
  beforeEach(function(){
    todo = new Todo();
  });

  it('has an empty list of tasks when created', function(){
    expect(todo.listOfTasks).toEqual({});
  });

  it('can add tasks to its list', function(){
    todo.addTask('walk the dog');
    expect(Object.keys(todo.listOfTasks)).toEqual(['walk the dog']);    
  });

  it('knows that a new added task\'s state is not done (false) when created', function(){
    todo.addTask('walk the dog');
    expect(todo.listOfTasks).toEqual({'walk the dog':false});   
  });

  it('can replace the status of a task to done (true) when done', function(){
    todo.addTask('walk the dog');
    todo.doTask('walk the dog');
    expect(todo.listOfTasks).toEqual({'walk the dog':true});
  });

  it('cannot do a task if it\'s already been done', function(){
    todo.addTask('walk the dog');
    todo.doTask('walk the dog');
    expect(function(){todo.doTask('walk the dog')}).toThrow(new Error('This task has already been done'));
  });

  it('cannot do a task if it\'s not in the list', function(){
    expect(function(){todo.doTask('walk the dog')}).toThrow(new Error('This task is not in the list'));  
  });

  describe('tasks management', function(){
    beforeEach(function(){
      todo.addTask('walk the dog');
      todo.addTask('buy milk');
      todo.doTask('walk the dog');
    });

  it('can show all tasks and its number', function(){
    expect(todo.listOfTasks).toEqual({'walk the dog':true, 'buy milk':false});
    expect(Object.keys(todo.listOfTasks).length).toEqual(2);
  });

  it('can show all active tasks and its number', function(){
    expect(todo.activeTasks).toEqual(['buy milk']);
    expect(Object.keys(todo.activeTasks).length).toEqual(1);
  });

  it('can show all completed tasks and its number', function(){
    expect(todo.completedTasks).toEqual(['walk the dog']);
    expect(Object.keys(todo.completedTasks).length).toEqual(1);    
  });

  it('can clear the full list of tasks', function(){
    todo.clearList();
    expect(todo.listOfTasks).toEqual({});
  });

  xit('can deleted all completed tasks', function(){
  });

  });
});
