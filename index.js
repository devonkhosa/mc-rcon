const {spawn} = require("child_process");

const ls = spawn("ls", ["-la"]);

const electron = require("electron");

ls.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});
