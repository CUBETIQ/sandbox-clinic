const electron = require("electron");
const { app, BrowserWindow } = electron;

let mainApp;

app.allowRendererProcessReuse = true;

app.on("ready", () => {

  mainApp = new BrowserWindow({
    width: 1000,
    height: 700
  });

  mainApp.webContents.executeJavaScript(`localStorage.setItem("author", "Sambo Chea <sombochea@cubetiqs.com>")`)
  mainApp.webContents.executeJavaScript(`localStorage.setItem("IS_ELECTRON", true)`)
  
  mainApp.setFullScreen(true)
  mainApp.setTitle("DR PROFESSIONAL CLINIC");
  mainApp.loadURL(process.env.DR_URL);

  mainApp.on("closed", () => {
    mainApp = null;
  });
});
