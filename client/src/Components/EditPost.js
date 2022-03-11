import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import useMutation ? update added 2/18/22
import { useMutation } from "@apollo/client";
import { EDIT_POST } from "../Utils/mutations";


// 3/10/22 still causing error:
// const [editPost] = useMutation(EDIT_POST);

const EditPost = () => {

    //do i need these const for editing a post??

    const { postId } = useParams();

    const { loading, data } = useQuery({ variables: { postId: postId }});

    const singlePost = data?.singlePost || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    //mutation
    //2/18/22 npm run build debug useMutation is called conditionally 
    // 3/2/22 error persists
    // 3/10/22 moved const [editPost] = useMutation(EDIT_POST); outside scope of this function

   
    


    //copy handleFormSubmit from CreatePost.js?

    //2/18/22 removed await from editPost re npm build error

    // 3/10/22 commenting out below const for debug

    // const mutationResponse = editPost ({
    //     variables: {
    //         postTitle: document.querySelector('#postTitle').value,
    //             postContent: document.querySelector('#postContent').value,
    //             tag: document.querySelector('#category').value,
    //     },
    // });
    // alert('Successfully Edited Post');
    //     window.location.assign('/');

    

    return (
        <div></div>
    );
};



export default EditPost;