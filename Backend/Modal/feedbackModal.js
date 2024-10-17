let mongoose = require ("mongoose");
let feedbackSchema = new mongoose.Schema({
    cname: {
        type: String,
        required: true
    },
    subname: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: { 
        type: String, 
        enum: ['pending', 'approved', 'denied'], 
        default: 'pending' 
    }
})

module.exports = mongoose.model("feedbacks", feedbackSchema);