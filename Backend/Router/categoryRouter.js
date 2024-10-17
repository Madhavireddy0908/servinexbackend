let express = require("express");
let Category = require("../Modal/categoryModal");
let categoryRouting = express.Router();

categoryRouting.get("/", async (req,res)=>{
    let category = await Category.find();
    res.send(category);
});

categoryRouting.post("/", async (req,res)=>{
    let category = new Category(req.body);
    let result = await category.save();
    res.send(result);
});

categoryRouting.delete("/:id", async (req,res)=>{
    let id = req.params.id;
    let category = await Category.deleteOne({_id:id});
    res.send(category);
});

categoryRouting.put("/:id", async (req,res)=>{
    let id = req.params.id;
    let category = await Category.updateOne({_id:id},{$set:req.body});
    res.send(category);
});

categoryRouting.get("/:id", async (req,res)=>{
    let id = req.params.id;
    let category = await Category.findOne({_id:id});
    res.send(category);
});

module.exports = categoryRouting;