import mongoose from 'mongoose';

const adSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    price: Number,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Ad', adSchema);
