const electron = require("electron");
const { app, BrowserWindow } = electron;

const URL = "https://app.drprofessionalglobal.com";

const DR_URL =
  process.env.DR_URL ||
  URL +
    "?platform=desktop&offline=true&source=" +
    (process.env.USERNAME || "unknown");
const DR_TITLE = "CUBETIQ CLINIC";

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
  mainApp.setTitle(DR_TITLE);

  console.log("Starting from:", DR_URL);
  mainApp.loadURL(DR_URL);

  mainApp.on("closed", () => {
    mainApp = null;
  });
});
