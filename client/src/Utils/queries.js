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

