const electron = require("electron");
const { app, BrowserWindow } = electron;
const os = require("os");

const URL = process.env.APP_URL || "https://clinic.cubetiqs.com";
const MAIN_URL = `${URL}?platform=desktop&offline=true&os=${os.platform()}&hostname=${os.hostname()}&arch=${os.arch()}&source=${process.env.USERNAME || "unknown"}`
const APP_TITLE = "CUBETIQ CLINIC SYSTEM";

let mainApp;
app.allowRendererProcessReuse = true;
app.on("ready", () => {
  mainApp = new BrowserWindow({
    width: 1024,
    height: 768,
  });

  mainApp.webContents.executeJavaScript(
    `localStorage.setItem("author", "Sambo Chea <sombochea@cubetiqs.com>")`
  );
  
  mainApp.webContents.executeJavaScript(
    `localStorage.setItem("IS_ELECTRON", true)`
  );

  mainApp.setFullScreen(true);
  mainApp.setTitle(APP_TITLE);

  console.log("Starting from:", MAIN_URL);
  mainApp.loadURL(MAIN_URL);

  mainApp.on("closed", () => {
    mainApp = null;
  });
});
