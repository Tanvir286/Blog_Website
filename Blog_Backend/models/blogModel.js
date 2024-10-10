const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: [String],
    image: {
        type: String,
    },
});

module.exports = mongoose.model('Blog', blogSchema);
