const express = require('express');

const {showEmp,addEmp, searchEmp, updateEmp, deleteEmp} = require('../Controller/empController');

const router=express.Router()

router.get("/showemp",showEmp)
router.post("/addEmp",addEmp)
router.get("/searchEmp/:id",searchEmp)
router.patch("/updateEmp/:id",updateEmp)
router.delete("/deleteEmp/:id",deleteEmp)

module.exports =router