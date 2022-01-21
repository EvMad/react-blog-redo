import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


const ViewPost = () => {

    const { postId } = useParams();

    const { loading, data } = useQuery({ variables: { postId: postId }});

    const singlePost = data?.singlePost || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return(
        <div></div>
    );
};

export default ViewPost;