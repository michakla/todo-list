"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./DrawerToggleButton.css");
exports.DrawerToggleButton = ({ click }) => (React.createElement("button", { className: "toggle-button", onClick: click },
    React.createElement("div", { className: "toggle-button__line" }),
    React.createElement("div", { className: "toggle-button__line" }),
    React.createElement("div", { className: "toggle-button__line" })));
//# sourceMappingURL=DrawerToggleButton.js.map