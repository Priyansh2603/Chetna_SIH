const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 5000;

app.get("/",(req, res)  => {
    res.send("hell0")
});
app.listen(port, () => {
    console.log('server is running at port no ${port}');

})
