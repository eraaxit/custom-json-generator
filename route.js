const express = require("express");
const router = express.Router();
const hardCode = require("./hardCode.json")

router.get("/:entries",async=(req,res)=>{
    numberOfEntries = req.params['entries'];
    const Json = hardCode.slice(0,numberOfEntries);
    res.json(Json);
})

module.exports = router;