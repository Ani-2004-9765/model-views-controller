const empModel = require('../model/empmodel');

//show

const showEmp= async(req,resp)=>{
try {
    const data = await empModel.find()
    resp.json(data);
    
} catch (error) {
    console.log(error);   
} 
}

//add
const addEmp=async(req,resp)=>{
    try {
        const data= new empModel({
            name:req.body.name,
             sal:req.body.sal,
             dept:req.body.dept
        })
        const result = await data.save();
        resp.json(result)
        
    } catch (error) {
        console.log(error);
        
    }
}

//update 
const updateEmp = async (req,resp)=>{
    try {
        const data= await empModel.findByIdAndUpdate(req.params.id ,req.body,{returnDocument:'after'})
        resp.json(data)
    } catch (error) {
        console.log(error);
        
    }
}
//delete

const deleteEmp= async(req,resp)=>{
    try {
        const data =await empModel.findByIdAndDelete (req.params.id)
        resp.json(data)
        console.log("deleted...");
        
    } catch (error) {
        console.log(error);
        
    }
}

//search 

const searchEmp=async(req,resp)=>{
    try {
        const data =await empModel.findById(req.params.id)
        resp.json(data);
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={showEmp,addEmp,updateEmp,deleteEmp,searchEmp}