import React, { useState } from "react";
import { useMutation } from "apollo/client";
import { ADD_POST } from "../Utils/mutations";
// import css
import auth from "../Utils/auth";

const CreatePost = (props) => {

    const [addPost] = useMutation(ADD_POST);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log(document.querySelector('#postTitle').value);
        // console.log entire post??
        console.log(document.querySelector('#postContent').value);
        console.log(document.querySelector('#category').value);

        const mutationResponse = await addPost ({
            variables: {
                postTitle: document.querySelector('#postTitle').value,
                postContent: document.querySelector('#postContent').value,
                tag: document.querySelector('#category').value,
            },
        });
        alert('Successfully Created Post');
        window.location.assign('/');
        };

        // return

}