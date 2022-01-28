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
type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addPost(postTitle: String!, postContent: String!, tag: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    editPost(postTitle: String!, postContent: String!, postId: ID!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
}
`;

module.exports = typeDefs;