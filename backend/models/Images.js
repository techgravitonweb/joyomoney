const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    fileName: {
        type: String,
        require: true,
    },
    path: {
        type: String,
        required: true,
    },
    uploadTime: {
        type: Date,
        default: Date.now
      }
});

module.exports = mongoose.model('Image', imageSchema);