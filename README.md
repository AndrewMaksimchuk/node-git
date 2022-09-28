## Combine git commands in one


`git add .`  
`git commit -m "message"`  
`git push -u origin main`  


### Usage:  
`npm run start`
`npm run start "Fix: Crash telephone field" dev`
`npm run test`
`npm run test "Fix: Crash telephone field" dev`
`NODE_GIT_TEST=true ./node-git.js`
`./node-git.js`
`./node-git.js "Fix: Crash telephone field" dev`


### NPM scripts  
start - Run commands with default behavior or with arguments.   
executeble - Make file "node-git.js" exacutable.   
test - Test default behavior or with arguments.   