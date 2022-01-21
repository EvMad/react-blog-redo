import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import useMutation ?
import { EDIT_POST } from "../Utils/mutations";

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

    //copy handleFormSubmit from CreatePost.js?

    const mutationResponse = await editPost ({
        variables: {
            postTitle: document.querySelector('#postTitle').value,
                postContent: document.querySelector('#postContent').value,
                tag: document.querySelector('#category').value,
        },
    });
    alert('Successfully Edited Post');
        window.location.assign('/');

    

    return (
        <div></div>
    );
};

export default EditPost;