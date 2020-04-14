"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.TaskListItem = ({ task, onDelete }) => {
    const onClick = () => {
        onDelete(task);
    };
    return (React.createElement("li", null,
        task.name,
        " ",
        React.createElement("button", { onClick: onClick }, "X")));
};
//# sourceMappingURL=TaskListItem.js.map