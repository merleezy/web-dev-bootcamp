let todoList = [];

while (true) {
  let input = prompt("What would you like to do?");

  if (input === null) break;

  const command = input.trim().toLowerCase();
  if (command === "quit" || command === "q") break;

  if (command === "new") {
    const newTodo = prompt("Enter new todo")?.trim();
    if (newTodo) {
      todoList.push(newTodo);
      console.log(`${newTodo} added to list`);
    }
  } else if (command === "list") {
    console.log("************ TO-DO ************");
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i}: ${todoList[i]}`);
    }
    console.log("*******************************");
  } else if (command === "delete") {
    const indexStr = prompt("Enter index of todo to delete");
    const index = parseInt(indexStr);
    if (index < todoList.length && index >= 0 && !Number.isNaN(index)) {
      const deleted = todoList.splice(index, 1);
      console.log(`${deleted[0]} has been removed`);
    } else {
      console.log("Unknown index");
    }
  } else {
    alert("Unknown command. Use: new, list, delete, quit.");
  }
}

console.log("Exiting...");
