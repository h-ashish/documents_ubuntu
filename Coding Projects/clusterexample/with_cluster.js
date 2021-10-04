const express =  require('express');
const app = express()
const port = 4000;

//you can use cluster module.
const cluster = require('cluster');
//the os module can find the os of cpus in  ur machine
const osModule = require('os');
const cpuNo = osModule.cpus().length;
console.log(osModule.cpus());
console.log(cpuNo);

if()

app.listen(port,()=>{
	console.log(`started app on port ${port}`);
})