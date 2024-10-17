let express = require("express");
let Subcategory = require("../Modal/subcategoryModal");
let subcategoryRouting = express.Router();

subcategoryRouting.get("/", async (req,res)=>{
    let subcategory = await Subcategory.find();
    res.send(subcategory);
});

subcategoryRouting.post("/", async (req,res)=>{
    let subcategory = new Subcategory(req.body);
    let result = await subcategory.save();
    res.send(result);
});

subcategoryRouting.delete("/:id", async (req,res)=>{
    let id = req.params.id;
    let subcategory = await Subcategory.deleteOne({_id:id});
    res.send(subcategory);
});

subcategoryRouting.put("/:id", async (req,res)=>{
    let id = req.params.id;
    let subcategory = await Subcategory.updateOne({_id:id},{$set:req.body});
    res.send(subcategory);
});

/*subcategoryRouting.get("/:id", async (req,res)=>{
    let id = req.params.id;
    let subcategory = await Subcategory.findOne({_id:id});
    res.send(subcategory);
});*/

subcategoryRouting.get("/:cname", async (req,res)=>{
    let cname = req.params.cname;
    let subcategory = await Subcategory.find({cname:cname});
    res.send(subcategory);
});

module.exports = subcategoryRouting;