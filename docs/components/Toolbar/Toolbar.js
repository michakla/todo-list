"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const DrawerToggleButton_1 = require("../SideDrawer/DrawerToggleButton");
require("./Toolbar.css");
exports.Toolbar = ({ drawerClickHandler }) => (React.createElement("header", { className: "toolbar" },
    React.createElement("nav", { className: "toolbar__navigation" },
        React.createElement("div", { className: "toolbar__toggle-button" },
            React.createElement(DrawerToggleButton_1.DrawerToggleButton, { click: drawerClickHandler })),
        React.createElement("div", { className: "toolbar__logo" },
            React.createElement("a", { href: "/" }, "THE new LOGO")),
        React.createElement("div", { className: "spacer" }),
        React.createElement("div", { className: "toolbar_navigation-items" },
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", { href: "/" }, "Products")),
                React.createElement("li", null,
                    React.createElement("a", { href: "/" }, "Users")))))));
//# sourceMappingURL=Toolbar.js.map