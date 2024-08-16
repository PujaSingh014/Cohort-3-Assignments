/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.mytodo = [];
  }

  add(task){
    this.mytodo.push(task);
  }

  remove(index){
    if(index>=0 && index<this.mytodo.length){
      this.mytodo.splice(index, 1);
    }
  }

  update(index, task){
    if(index>=0 && index<this.mytodo.length)
      this.mytodo[index] = task;
  }

  getAll(){
    return this.mytodo;
  }

  get(index){
    if(index>=0 && index<this.mytodo.length)
      return this.mytodo[index];
    else return null;
  }
  clear(){
    this.mytodo = [];
  }
}

module.exports = Todo;
