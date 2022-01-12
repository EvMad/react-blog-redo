const { Schema, model } = require('mongoose');

// const bcrypt = require('bcrypt');

const userSchema = new Schema ({

    username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 8,
      },
});

// pre-save middleware to create password
// userSchema.pre('save', async function (next) {})


//compare password to hashed password
// userSchema.methods.isCorrectPassword = async function (password) {}


const User = model('User', userSchema);

module.exports = User;
