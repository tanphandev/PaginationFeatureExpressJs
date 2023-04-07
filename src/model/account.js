const mongoose = require('mongoose');
const { Schema } = mongoose;
const acountSchema = new Schema(
    {
        name: { type: String, require },
        password: { type: String, require },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('accounts', acountSchema);
