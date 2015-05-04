var Todo = function(){
  this.listOfTasks = {}
};

Todo.prototype.addTask = function(string){
  this.listOfTasks[string] = false;
};

Todo.prototype.doneTask = function(string){
  this.listOfTasks[string] = true;
};