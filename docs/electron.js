"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require("path");
const url = require("url");
let mainWindow;
electron_1.app.allowRendererProcessReuse = true;
function reload() {
    if (mainWindow === null) {
        createWindow();
    }
    mainWindow.loadURL(process.env.ELECTRON_START_URL ||
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        }));
}
;
function createWindow() {
    console.log("createWindow...");
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true
        }
    });
    reload();
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', () => {
    console.log("window-all-closed...");
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    console.log("onActivate...");
    if (mainWindow === null) {
        createWindow();
        return;
    }
    reload();
});
//# sourceMappingURL=electron.js.map