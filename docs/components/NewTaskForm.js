"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.NewTaskForm = ({ onChange, onAdd, task }) => (React.createElement("form", { onSubmit: onAdd },
    React.createElement("input", { onChange: onChange, value: task.name }),
    React.createElement("button", { type: "submit" }, "Add a task")));
//# sourceMappingURL=NewTaskForm.js.map