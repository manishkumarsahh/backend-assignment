const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        type: String
        
    },
    
    id:{
        type: Number
    }
}, {
    timestamps: true
});


const Data = mongoose.model('Data', dataSchema);

module.exports = Data;