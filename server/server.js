const express= require("express");
const app= express();
app.get("/api", function(req,res) {
    res.json(["tag1","word3","react","tag2","tag3","word2","letter1","letter2","other","tag5","tag6"]);
});
app.listen(1994, ()=>{console.log("Server started on port 1994")})