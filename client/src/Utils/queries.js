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
