# [Task Tracker CLI](https://github.com/DarshanParhyar/Task-Tracker)


A simple command-line interface (CLI) application for tracking tasks with different statuses (`todo`, `in-progress`, `done`). 
You can add, update, delete, and manage tasks using this CLI.

## Project URL
[Task Tracker CLI GitHub Repository](https://github.com/DarshanParhyar/Task-Tracker)

## Features
#### Add a new task
#### Update an existing task
#### Delete a task
#### Mark tasks as in-progress or done
#### List tasks by status (todo, in-progress, done)
#### Tasks are persisted in a JSON file


# Prerequisites
Node.js (version 12 or above)
Getting Started
##### Installation
Clone the repository:
`https://github.com/DarshanParhyar/Task-Tracker.git`
`cd Task-Tracker`

Install the required Node.js packages (if any, for now, no additional packages are required):
`npm install`

` 
#### Adding a new task
node taskCli.js add "Buy groceries"
#### Output: Task added successfully (ID: 1)

#### Updating and deleting tasks
node taskCli.js update 1 "Buy groceries and cook dinner"
node taskCli.js delete 1

#### Marking a task as in progress or done
node taskCli.js mark-in-progress 1
node taskCli.js mark-done 1

#### Listing all tasks
node taskCli.js list

#### Listing tasks by status
node taskCli.js list done
node taskCli.js list todo
node taskCli.js list in-progress`

### Contributing
If you have suggestions or improvements, please feel free to submit a pull request or open an issue.


