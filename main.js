const electron = require("electron");
const { app, BrowserWindow } = electron;
const Store = require("electron-store");

let mainWindow;
const store = new Store();

store.set('unicorn', '🦄');
console.log(store.get('unicorn'));

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700
  });

  mainWindow.setFullScreen(true)
  mainWindow.setTitle("DR PROFESSIONAL CLINIC");
  mainWindow.loadURL("http://clinic.cubetiq.online");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
