var Todo = function(){
  this.listOfTasks = {}
};

Todo.prototype.addTask = function(string){
  this.listOfTasks[string] = false;
};

Todo.prototype.doTask = function(string){
  if (this.listOfTasks[string] === true){
    throw new Error('This task has already been done');
  };
  this.listOfTasks[string] = true;
};