const { Router } = require("express");
const router =  Router();

router.get("/test",(req,res)=>{
    const data ={
        "name":"jesus",
        "apellido":"barbosa"


    };
    res.json(data);
});
module.exports = router;