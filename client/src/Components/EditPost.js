import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const EditPost = () => {

    //do i need these const for editing a post??

    const { postId } = useParams();

    const { loading, data } = useQuery({ variables: { postId: postId }});

    const singlePost = data?.singlePost || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    //mutation

    const [editPost] = useMutation(EDIT_POST);

    return (
        <div></div>
    );
};

export default EditPost;