"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./SideDrawer.css");
exports.SideDrawer = ({ show }) => {
    let drawerClass = ['side-drawer'];
    if (show) {
        drawerClass = ['side-drawer', 'open'];
    }
    return (React.createElement("nav", { className: drawerClass.join(' ') },
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement("a", { href: "/" }, "Products")),
            React.createElement("li", null,
                React.createElement("a", { href: "/" }, "Users")))));
};
//# sourceMappingURL=SideDrawer.js.map