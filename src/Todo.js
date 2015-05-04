var Todo = function(){
  this.listOfTasks = {}
  this.activeTasks = []
  this.completedTasks = []
};

Todo.prototype.addTask = function(string){
  this.listOfTasks[string] = false;
  this.activeTasks.push(string);
};

Todo.prototype.doTask = function(string){
  var theString = string;
  // my refactoring doesnt work. See below. Need to ask Spike and Dan
  if (this.listOfTasks[theString] === true){ throw new Error('This task has already been done')};
  if (this.listOfTasks[theString] === undefined){ throw new Error('This task is not in the list')};
  // this.checkingForErrors;
  // this.deleteInActiveTasks;
  var index = this.activeTasks.indexOf(string);
  this.activeTasks.splice(index, 1);
  this.listOfTasks[string] = true;
};

// Todo.prototype.deleteInActiveTasks = function(){

// };

// Todo.prototype.checkingForErrors = function(){
//   if (this.listOfTasks[theString] === true){ throw new Error('This task has already been done')};
//   if (this.listOfTasks[theString] === undefined){ throw new Error('This task is not in the list')};
// };