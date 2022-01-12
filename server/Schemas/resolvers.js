const { AuthenticationError } = require("apollo-server-expres");

// const { User, Post } = require('../models');

// const { signToken } = require("../utils/auth");

// const resolvers = { Query: {} Mutation: {} }

const resolvers = {

    Query: {

        users: async => {
            return User.find().populate("posts");
        },

        user: async (parent, { username }) => {
            return User.findOne({ username: username });
        },

        
    }
}