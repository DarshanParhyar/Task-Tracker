const fs = require("fs");
const path = require("path");

const storeTasksFile = path.join(__dirname, "tasks.json");

if (!fs.existsSync(storeTasksFile)) {
  fs.writeFileSync(storeTasksFile, JSON.stringify([]));
}

function readTasks() {
  const tasks = JSON.parse(fs.readFileSync(storeTasksFile, "utf8"));
  return tasks;
}

function writeTasks(tasks) {
  fs.writeFileSync(storeTasksFile, JSON.stringify(tasks, null, 2));
}

function addTask(description) {
  const tasks = readTasks();
  const newTask = {
    id: tasks.length + 1,
    description,
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  tasks.push(newTask);
  writeTasks(tasks);
  console.log(`Task added successfully (ID: ${newTask.id})`);
}

function updateTask(id, description) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex !== -1) {
    tasks[taskIndex].description = description;
    tasks[taskIndex].updatedAt = new Date();
    writeTasks(tasks);
    console.log(`Task updated successfully (ID: ${id})`);
  } else {
    console.log(`Task not found with ID: ${id}`);
  }
}

function deleteTask(id) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    writeTasks(tasks);
    console.log(`Task deleted successfully (ID: ${id})`);
  } else {
    console.log(`Task not found with ID: ${id}`);
  }
}

function markInProgress(id) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex !== -1) {
    tasks[taskIndex].status = "in-progress"; // Ensure this matches the filter
    tasks[taskIndex].updatedAt = new Date();
    writeTasks(tasks);
    console.log(`Task marked as in progress (ID: ${id})`);
  } else {
    console.log(`Task not found with ID: ${id}`);
  }
}

function markDone(id) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex !== -1) {
    tasks[taskIndex].status = "done";
    tasks[taskIndex].updatedAt = new Date();
    writeTasks(tasks);
    console.log(`Task marked as done (ID: ${id})`);
  } else {
    console.log(`Task not found with ID: ${id}`);
  }
}

function listTasks(status = null) {
  const tasks = readTasks();
  const validStatuses = ["todo", "in-progress", "done"];
  const filteredTasks =
    status && validStatuses.includes(status)
      ? tasks.filter((task) => task.status === status)
      : tasks;

  if (filteredTasks.length) {
    filteredTasks.forEach((task) => {
      console.log(
        `[ID: ${task.id}] ${task.description} - ${task.status} (Created at: ${task.createdAt}) (Updated at: ${task.updatedAt}) `
      );
    });
  } else {
    console.log("No tasks found.");
  }
}

const [, , command, arg1, arg2] = process.argv;

switch (command) {
  case "add":
    if (arg1) addTask(arg1);
    else console.error("Please provide a task description.");
    break;
  case "update":
    if (arg1 && arg2) updateTask(arg1, arg2);
    else console.error("Please provide a task ID and description.");
    break;
  case "delete":
    if (arg1) deleteTask(arg1);
    else console.error("Please provide a task ID.");
    break;
  case "mark-in-progress":
    if (arg1) markInProgress(arg1);
    else console.error("Please provide a task ID.");
    break;
  case "mark-done":
    if (arg1) markDone(arg1);
    else console.error("Please provide a task ID.");
    break;
  case "list":
    if (arg1 && ["done", "todo", "in-progress"].includes(arg1)) {
      listTasks(arg1);
    } else {
    }
    break;
  default:
    console.error("Unknown command.");
}
