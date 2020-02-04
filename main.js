const electron = require("electron");
const { app, BrowserWindow } = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700
  });

  mainWindow.setTitle("CUBETIQ Clinic");
  mainWindow.loadURL("http://clinic.cubetiq.online");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
