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

/* 
0 - shrut
1 - hi
2 - hellp
3 - asda s da

length - 4 


*/

class Todo {
  constructor(){
    this.todo_list = [];
  }
  add(todo){
    this.todo_list.push(todo);
  }
  remove(index){
    if(index< 0 || index >= this.todo_list.length )console.log("Invalid index in remove.");
    else {
      this.todo_list.splice(index,1);
    }
  }
  update(index, updatedTodo){
    if ( index < 0 || index >= this.todo_list.length){
      //here is the issue 
      console.log("Invalid Index in update.");
    }
    else {
      this.todo_list[index] = updatedTodo;
    }
  }
  getAll(){
    return this.todo_list;
  }
  get(index){
    if(index < 0 || index >= this.todo_list.length){
      console.log("Invalid Index in get.");
      return null;
    }else {
      return this.todo_list[index];
    }
  }
  clear(){
    this.todo_list = [];
  }
}

module.exports = Todo;