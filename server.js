const express = require("express");
const app = express ();
app.use(express.json({extended:false}));
app.get("/", (req,res) => res.json({msg:"hello world"}));

app.use("/api" , require('./route'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server running on ${PORT}`));