import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
    query allPosts {
        posts {
            _id
            postContent
            postAuthor
            postTitle
            comments {
                commentText
            }
            createdAt
        }
    }
`;

export const QUERY_USERPOSTS = gql`
    query usersPost($user_id: String!) {
        usersPost(userID: $user_id) {
            _id
            postContent
            postAuthor
            postTitle
            comments {
                commentText
            }
            createdAt
        }
    }
`;

export const QUERY_POST = gql`
    query onePost($post_id: ID!) {
        post(postId: $post_id) {
            _id
            postContent
            postAuthor
            postTitle
            createdAt
            comments
        }
    }
`;

// QUERY_USERS

export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            username
        }
    }
`;

// QUERY_USER