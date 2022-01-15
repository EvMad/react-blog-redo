const { AuthenticationError } = require("apollo-server-expres");

const { User, Post } = require('../Models');

const { signToken } = require("../Utils/auth");

// const resolvers = { Query: {} Mutation: {} }

const resolvers = {

    Query: {

        users: async => {
            return User.find().populate("posts");
        },

        user: async (parent, { username }) => {
            return User.findOne({ username: username });
        },

        posts: async (parent, { userID }) => {

            if (!userID) {
                return Post.find().sort({ createdAt: -1 });
            } else {
                return Post.find({ user_id: userID }).sort({ createdAt: -1 });
            }
        },

        usersPost: async (parent, { userID }) => {
            return Post.find({ user_id: userID }).sort({ createdAt: -1 });
        },

        post: async (parent, { _id: postID }) => {
            return Post.findOne({ _id: postId });
        },
    },

    //Mutation:
}