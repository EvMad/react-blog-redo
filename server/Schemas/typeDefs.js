const { gql } = require('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID
    username: String
    password: String
    posts: [Post]!
}
type Post {
    _id: ID
    postContent: String
    postAuthor: String
    user_id: String
    postTitle: String
    createdAt: String
    categories: [CateforyName]!
    comments: [Comment]!
}

type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
}


`