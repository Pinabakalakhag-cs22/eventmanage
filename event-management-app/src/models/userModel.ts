import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Method to hash the password
userSchema.methods.hashPassword = async function(password: string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// Method to compare the password
userSchema.methods.comparePassword = async function(password: string) {
    return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

export default User;