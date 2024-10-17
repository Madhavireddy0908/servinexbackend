let express = require("express");
let Feedback = require("../Modal/feedbackModal");
let feedbackRouting = express.Router();

feedbackRouting.get("/", async (req,res)=>{
    let feedback = await Feedback.find();
    res.send(feedback);
});

feedbackRouting.post("/", async (req,res)=>{
    let feedback = new Feedback(req.body);
    let result = await feedback.save();
    res.send(result);
});

feedbackRouting.delete("/:id", async (req,res)=>{
    let id = req.params.id;
    let feedback = await Feedback.deleteOne({_id:id});
    res.send(feedback);
});

feedbackRouting.put("/:id", async (req,res)=>{
    let id = req.params.id;
    let feedback = await Feedback.updateOne({_id:id},{$set:req.body});
    res.send(feedback);
});

/*feedbackRouting.get("/:id", async (req,res)=>{
    let id = req.params.id;
    let feedback = await Feedback.findOne({_id:id});
    res.send(feedback);
});*/

feedbackRouting.put("/approve/:id", async (req, res) => {
    try {
      const feedback = await Feedback.findById(req.params.id);
      if (!feedback) return res.status(404).send("Feedback not found");
  
      feedback.status = feedback.status === "approved" ? "pending" : "approved"; 
      await feedback.save();
      res.send(feedback);
    } catch (err) {
      res.status(500).send(err);
    }
});

feedbackRouting.put("/deny/:id", async (req, res) => {
    try {
      const feedback = await Feedback.findById(req.params.id);
      if (!feedback) return res.status(404).send("Feedback not found");
  
      feedback.status = feedback.status === "denied" ? "pending" : "denied";
      await feedback.save();
      res.send(feedback);
    } catch (err) {
      res.status(500).send(err);
    }
});
  
feedbackRouting.get('/approved', async (req, res) => {
    try {
        const approvedFeedback = await Feedback.find({ status: 'approved' }).limit(3).sort({ createdAt: -1 });
        res.send(approvedFeedback);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = feedbackRouting;