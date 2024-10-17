let express = require("express");
require("./dbconnection/dbcon");
let cors = require("cors");
const adminloginRouting = require("./Router/adminloginRouter");
const categoryRouting = require("./Router/categoryRouter");
const offerRouting = require("./Router/offerRouter");
const subcategoryRouting = require("./Router/subcategoryRouter");
const serviceproviderRouting = require("./Router/serviceproviderRouter");
const feedbackRouting = require("./Router/feedbackRouter");
const bookserviceloginRouting = require("./Router/bookserviceloginRouter");

let app = express();
app.use(express.json());
app.use(cors());
app.use("/adminlogin", adminloginRouting);
app.use("/category", categoryRouting);
app.use("/offer", offerRouting);
app.use("/subcategory", subcategoryRouting);
app.use("/serviceprovider", serviceproviderRouting);
app.use("/feedback", feedbackRouting);
app.use("/bookservice", bookserviceloginRouting);

app.listen(4000);