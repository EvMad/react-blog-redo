import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
//added 2/18/22 re npm run build debug.  did not solve error:
import { QUERY_POST } from '../Utils/queries';
import './css/viewpost.css';
import { Post } from '../Models/Post';

//2/18/22 npm run build debug error "post" is not defined.


const ViewPost = () => {

    const { postId } = useParams();

    const { loading, data } = useQuery({ variables: { postId: postId }});

    const singlePost = data?.singlePost || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return(
        <div className="postContainer">

            <div className="singlePost">
                <div className="image">
                    <img></img>
                </div>
                <h2 className="postHeading">{Post.postTitle}</h2>
                <p className="postContent">{Post.postContent}</p>
            </div>

        </div>
    );
};

export default ViewPost;