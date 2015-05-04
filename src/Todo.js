var Todo = function(){
  this.listOfTasks = {};
  this.activeTasks = [];
  this.completedTasks = [];
};

Todo.prototype.addTask = function(string){
  this.listOfTasks[string] = false;
  this.activeTasks.push(string);
};

Todo.prototype.doTask = function(string){
  var theString = string;
  // my refactoring doesnt work. See below. Need to ask Spike and Dan

  // this.checkingForErrors;
  if (this.listOfTasks[theString] === true){ throw new Error('This task has already been done')};
  if (this.listOfTasks[theString] === undefined){ throw new Error('This task is not in the list')};

  // this.deleteInActiveTasks;
  var index = this.activeTasks.indexOf(theString);
  this.activeTasks.splice(index, 1);

  this.completedTasks.push(theString);
  this.listOfTasks[theString] = true;
};

// Todo.prototype.deleteInActiveTasks = function(){
  // var index = this.activeTasks.indexOf(theString);
  // this.activeTasks.splice(index, 1);
// };

// Todo.prototype.checkingForErrors = function(){
//   if (this.listOfTasks[theString] === true){ throw new Error('This task has already been done')};
//   if (this.listOfTasks[theString] === undefined){ throw new Error('This task is not in the list')};
// };

Todo.prototype.clearList = function(){
  this.listOfTasks = {};
};