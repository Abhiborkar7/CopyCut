import mongoose from 'mongoose';

const textFileSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    textCode: {
        type: Number,
    }
    
}, {timestamps:true});

const TextFile = mongoose.model('TextFile', textFileSchema);

export default TextFile;
