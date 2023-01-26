

import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const User = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
})

// userSchema.pre('save', async function(next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await
//   }
// });

export default mongoose.models.User || mongoose.model('User', User);
