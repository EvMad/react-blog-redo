import React from 'react';
// import { Link } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
//added 2/18/22 re npm run build debug.  did not solve error:
import { QUERY_POST } from '../Utils/queries';
import './css/viewpost.css';


//2/18/22 npm run build debug error "post" is not defined.
// 3/11/22 npm run build returns no errors after commenting out return h2 and p divs re "post"


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
                    <img alt="blog post"></img>
                </div>
                {/* <h2 className="postHeading">{post.postTitle}</h2>
                <p className="postContent">{post.postContent}</p> */}
            </div>

        </div>
    );
};

export default ViewPost;