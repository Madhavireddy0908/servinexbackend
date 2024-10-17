let express = require("express");
let nodemailer = require("nodemailer");
let Serviceprovider = require("../Modal/serviceproviderModal");
let serviceproviderRouting = express.Router();

serviceproviderRouting.get("/", async (req,res)=>{
    let serviceprovider = await Serviceprovider.find();
    res.send(serviceprovider);
});

serviceproviderRouting.post("/", async (req,res)=>{
    let serviceprovider = new Serviceprovider(req.body);
    let result = await serviceprovider.save();
    res.send(result);
});

serviceproviderRouting.post('/sendemail', (req, res) => {
    const { name, phone, email, address} = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "madhavireddy0908@gmail.com",
        pass: "dujx tskh lzhu zuzu",
      },
    });
  
    const mailOptions = {
      from: email,
      to: "madhavitangirala0908@gmail.com",
      subject: 'Details of User from Enquiry Form',
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}`,
    };
  
    transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
        return console.log(err);
      }
      res.send('Email sent successfully');
    });
});
  
serviceproviderRouting.delete("/:id", async (req,res)=>{
    let id = req.params.id;
    let serviceprovider = await Serviceprovider.deleteOne({_id:id});
    res.send(serviceprovider);
});

serviceproviderRouting.put("/:id", async (req,res)=>{
    let id = req.params.id;
    let serviceprovider = await Serviceprovider.updateOne({_id:id},{$set:req.body});
    res.send(serviceprovider);
});

/*serviceproviderRouting.get("/:id", async (req,res)=>{
    let id = req.params.id;
    let serviceprovider = await Serviceprovider.findOne({_id:id});
    res.send(serviceprovider);
});*/

serviceproviderRouting.get("/:subname", async (req,res)=>{
    let subname = req.params.subname;
    let serviceprovider = await Serviceprovider.find({subname:subname});
    res.send(serviceprovider);
});

module.exports = serviceproviderRouting;