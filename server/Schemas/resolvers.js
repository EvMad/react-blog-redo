const { AuthenticationError } = require("apollo-server-express");

const { User, Post } = require('../Models');

const { signToken } = require("../Utils/auth");

// const resolvers = { Query: {} Mutation: {} }

const resolvers = {

    Query: {

        users: async () => {
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

    Mutation: {

        addUser: async (parent, { username, password }) => {
            const user = await User.create({ username, password });
            const token = signToken(user);

            return { token, user };
        },

        login: async (parent, { username, passowrd }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError("No username found.");
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect Password.");
            }

            const token = signToken(user);
            
            return { token, user };
        },

        addPost: async (parent, { postTitle, postContent, tag }, context) => {

            if (context.user) {
                let newTag = {
                    category: tag
                }
                console.log(context.user);
                console.log(newTag);
                const post = await Post.create({
                    postTitle,
                    postContent,
                    postAuthor: context.user.username,
                    user_id: context.user._id,
                    categories: newTag ,
                });
                return post;
            }
            throw new AuthenticationError("Please log in.");
        },

        removePost: async (parent, { postID }, context) => {

            if (context.user) {
                const post = await Post.findOneAndDelete({
                    _id: postId,
                });
                return post;
            }
            throw new AuthenticationError("Please log in.");
        },

        editPost: async (parent, { postTitle, postContent, postId }, context) => {

            if (context.user) {
                const post = await Post.findOneAndUpdate(
                    { _id: postId },
                    { postTitle: postTitle, postContent: postContent }
                );

                return post;
            }
            throw new AuthenticationError("Please log in.");
        },

        addComment: async (parent, { postId, commentText }, context) => {

            if (context.user) {
                let newComment = {
                    commentText: commentText,
                    commentAuthor: context.user.username,
                };
                console.log(newComment);
                return Post.findOneAndUpdate(
                    { _id: postId },
                    { $addToSet: { comments: newComment },
                },
                {
                    new: true,
                    runValidators: true,
                }
                );
            } else {
                throw new AuthenticationError("Please log in.");
            }

            //deleteComment: async (parent. { postId, commentId }, context) => {}
        },
    },
};

module.exports = resolvers;

// export{ resolvers };