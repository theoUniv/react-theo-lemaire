import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    email: String,
    password: String,
});

export default mongoose.model('User', userSchema);
