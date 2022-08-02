const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema ({

    postTitle: {
        type: String,
        required: 'Please include title.',
        minlength: 1,
        trim: true,

    },
// pull post Author from User model ?
    postAuthor: {
        type: String,
        required: 'Please include author name.',
        minlength: 1,
        trim: true,
    },

    postContent: {
        type: String,
        required: 'Post content required.',
        minlength: 1,
        trim: true,

    },

    // postImage : {},

    categories: [
        {
            category: {
                type: String,
                required: 'Please tag at least one category.',
                minlength: 1,
                maxlength: 125,
            },
        }
    ],

    user_id: {
        type: String,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },

    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
            //pull comment author from User model?
            commentAuthor: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],

});

const Post = model('Post', postSchema);

module.exports = Post;

// export{ Post };