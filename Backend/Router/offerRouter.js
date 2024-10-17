let express = require("express");
let Offer = require("../Modal/offerModal");
let offerRouting = express.Router();

offerRouting.get("/", async (req,res)=>{
    let offer = await Offer.find();
    res.send(offer);
});

offerRouting.post("/", async (req,res)=>{
    let offer = new Offer(req.body);
    let result = await offer.save();
    res.send(result);
});

offerRouting.delete("/:id", async (req,res)=>{
    let id = req.params.id;
    let offer = await Offer.deleteOne({_id:id});
    res.send(offer);
});

offerRouting.put("/:id", async (req,res)=>{
    let id = req.params.id;
    let offer = await Offer.updateOne({_id:id},{$set:req.body});
    res.send(offer);
});

offerRouting.get("/:id", async (req,res)=>{
    let id = req.params.id;
    let offer = await Offer.findOne({_id:id});
    res.send(offer);
});

module.exports = offerRouting;