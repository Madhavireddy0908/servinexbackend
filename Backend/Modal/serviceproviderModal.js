let mongoose = require ("mongoose");
let serviceproviderSchema = new mongoose.Schema({
    cname: {
        type: String,
        required: true
    },
    subname: {
        type: String,
        required: true
    },
    comname: {
        type: String,
        required: true
    },
    pname: {
        type: String,
        required: true
    },
    paddr: {
        type: String,
        required: true
    },
    pemail: {
        type: String,
        required: true
    },
    pphone: {
        type: Number,
        required: true
    },
    comdesc: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("serviceproviders", serviceproviderSchema);