const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
res.send("Hello World!");
});

app.get("/cluster/:n", function (req, res) {
let n = parseInt(req.params.n);
let count = 0;

if (n > 5000000000) n = 5000000000;

for (let i = 0; i <= n; i++) {
count += i * 2;
}

res.send(`Final count after adding input is ${count}`);
});

app.listen(port,()=>{
	console.log(`started app on port ${port}`);
})