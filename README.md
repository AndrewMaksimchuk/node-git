## Combine git commands in one


`git add .`  
`git commit -m "message"`  
`git push -u origin main`  


### Usage:  
`npm run start "Fix: Crash telephone field" dev`  
`npm run test "Fix: Crash telephone field" dev`  
`./node-git.js`  
`./node-git.js "Fix: Crash telephone field" dev`  
`NODE_GIT_TEST=true ./node-git.js`  
`node-git`  
`node-git "Fix: Crash telephone field" dev`  


### NPM scripts  
`start` - Run commands with default behavior or with arguments.   
`executeble` - Make file "node-git.js" exacutable.   
`test` - Test default behavior or with arguments.   
`install` - Install package.   
`remove` - Remove package.   


### Notes
Default branch: "main"  
Default commit message: "Init project"

First argument of command is commit message (in double qoutes),  
second argument is branch name.  

