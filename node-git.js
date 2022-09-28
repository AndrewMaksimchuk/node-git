#!/usr/bin/env node


import { execSync } from "child_process";

const NODE_GIT_TEST = process.env.NODE_GIT_TEST;
const [ ,, inputMesage, inputBranch ] = process.argv;


const commitMessage = inputMesage || "Init project";
const branchName = inputBranch || "main";


const add = "git add .";
const commit = `git commit -m "${commitMessage}"`;
const push = `git push -u origin ${branchName}`;


const flow = [add, commit, push];

try {
    main(flow);
} catch (error) {
}


function main(flow = []) {
    return flow.forEach((job) => execJob(job));
}


function execJob(job) {
    if (NODE_GIT_TEST) return console.log(job);
    const response = execSync(job).toString().trim();
    return console.log(response);
}


