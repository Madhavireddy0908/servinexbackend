let mongoose = require ("mongoose");
let categorySchema = new mongoose.Schema({
    cname: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("categorys", categorySchema);