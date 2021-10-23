const express = require("express");
const router = express.Router();
const hardCode = require("./hardCode.json")


router.post("/",async=(req,res)=>{
   const info= req.body;

    const generateString = (length)=>{
        var result           = '';
        var characters       = 'abcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));}
       return result;
    }

    const generateNumber = (length)=>{
        var result           = '';
        var characters       = '1234567890';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));}
       return result;
    }

    var Json = [];
    let entry = {};
    for(i = 0;i<info[0].numberOfEntries;i++){
        entry={};
        for(j=1;j<info.length;j++){
            const {keyword,type,word_length} = info[j]
            if(type==="number"){
                entry[keyword] = generateNumber(word_length);
            }
            else{
                entry[keyword] = generateString(word_length);
        }
    }
    Json.push(entry)

}
res.json(Json);
})

module.exports = router;