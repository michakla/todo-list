"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TaskListItem_1 = require("./TaskListItem");
exports.TasksList = ({ tasks, onDelete }) => (React.createElement("ul", null, tasks.map(task => (React.createElement(TaskListItem_1.TaskListItem, { task: task, onDelete: onDelete })))));
//# sourceMappingURL=TaskList.js.map