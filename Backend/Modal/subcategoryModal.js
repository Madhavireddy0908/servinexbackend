let mongoose = require ("mongoose");
let subcategorySchema = new mongoose.Schema({
    cname: {
        type: String,
        required: true
    },
    subname: {
        type: String,
        required: true
    },
    subdesc: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("subcategorys", subcategorySchema);