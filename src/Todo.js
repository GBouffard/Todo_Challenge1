var Todo = function(){
  this.listOfTasks = []
};

Todo.prototype.addTask = function(string){
  this.listOfTasks.push(string);
};