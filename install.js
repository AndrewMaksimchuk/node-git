#!/usr/bin/env node


import { execSync } from "child_process";
import { join } from "path";


const CWD = process.cwd();
const binCurrentFilePath = join(CWD, "node-git.js");
const GlobalBinDirectory = execSync("npm bin -g").toString().trim();
const symlinkTarget = join(GlobalBinDirectory, "node-git");
const commandCreateSymlink = `ln -s ${binCurrentFilePath} ${symlinkTarget}`;

try {
    execSync(commandCreateSymlink);
} catch (error) {
}
