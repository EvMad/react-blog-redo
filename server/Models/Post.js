const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema ({

    postTitle: {

    },

    postAuthor: {

    },

    postContent: {

    },

    // postImage : {},

    categories: [
        {
            category: {},
        }
    ],

    user_id: {

    },

    createdAt: {

    },

    comments: [
        {
            commentText: {},
            commentAuthor: {},
            createdAt: {},
        },
    ],

});

// const Post = model('Post', postSchema);

// module.exports = Post;