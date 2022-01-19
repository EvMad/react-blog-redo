import { gql } from '@apollo/client';

// double-check syntax re: spacing and capitalization

// export const ADD_USER = gql``

export const ADD_USER = gql `
    mutation addUser($username: String!, $password: String!) {
        addUser(username: $username, passowrd: $passowrd) {
            user {
                _id
                username
                password
            }
            token

        }
    }
`;

//export const LOGIN = gql``

export const LOGIN = gql`
    mutation login($username: String!, $passowrd: String!) {
        login(username: $username, password: $passowrd) {
            user {
                username
            }
            token
        }
    }
`;

//export const ADD_POST = gql``

export const ADD_POST = gql`
    mutation addPost($postTitle: String!, $postContent: String!, $tag: String!) {
        addPost(postTitle: $postTitle, postContent: $postContent, tag: $tag) {
            postTitle
            postContent
        }
    }
`;

//export const ADD_COMMENT = gql``

export const ADD_COMMENT = gql`
    mutation addComment($postID!, $commentText: String!) {
        addComment(postId: $postId, commentText: $commentText) {
            postId
            postText
            commentAuthor
        }
    }
`;

//export const EDIT_POST = gql``

//export const REMOVE_POST = gql``

// remove comment? edit comment?