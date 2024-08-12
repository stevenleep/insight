// const os = require("os");
// const path = require("path");
// const {Watcher} = require("watcher");
import Watcher from "watcher";
import os from "os";
import path from "path";

const homeDir = os.homedir();
const workDir = path.join(homeDir, "SolopaceDriveSpace");

const mwatcher = new Watcher([
    workDir,
    // path.join(homeDir, "Downloads"),
], {
    recursive: true,
    renameDetection: true,
    ignoreHidden: true,
    renameTimeout: 500,
});

mwatcher.on("all", (event, targetPath, targetPathNext) => {
    console.log(event, targetPath, targetPathNext);
});

console.log(mwatcher)
