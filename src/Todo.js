var Todo = function(){
  this.listOfTasks = {}
};

Todo.prototype.addTask = function(string){
  this.listOfTasks[string] = false;
};

Todo.prototype.doTask = function(string){
  if (this.listOfTasks[string] === true){ throw new Error('This task has already been done')};
  if (this.listOfTasks[string] === undefined){ throw new Error('This task is not in the list')};
  this.listOfTasks[string] = true;
};