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
type CategoryName {
    category: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
    posts: [Post]
    usersPost(userID: String!): Post
    post(postId: ID!): Post
}


`