const fs = require("fs");
const argProfile = process.argv.slice(2);
// const { exec } = require('child_process');

if (argProfile.length === 0) {
  return;
}

argProfile.forEach((profile) => {
  const profileEnv = `./profile/${profile}.dev`;
  const profileJs = `./profile/${profile}.js`;

  console.log("Generating for electron-builder.env");
  fs.readFile(profileEnv, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(data);

    fs.writeFile("./electron-builder.env", data, "utf8", (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log("file saved");
    });
  });

  console.log("Generating for lib.js");
  fs.readFile(profileJs, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(data);

    fs.writeFile("./lib.js", data, "utf8", (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log("file saved");
    });
  });

  // console.log("Building for " + profile + "...!");
  // exec('yarn dist', (err, stdout, stderr) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  
  //   console.log(`stdout: ${stdout}`);
  //   console.log(`stderr: ${stderr}`);
  // });

});
