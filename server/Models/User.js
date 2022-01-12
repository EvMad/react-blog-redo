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