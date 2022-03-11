import React from 'react';
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../Utils/mutations";
import auth from "../Utils/auth";

const Comment = (props) => {

    const [addComment] = useMutation(ADD_COMMENT);

    //const handleFormSubmit - needs #ID's for querySelector

    // 3/11/22 npm run build warning auth is defined but never used

    const mutationResponse = addComment ({
        variables: {
            //postId ??
            commentText: document.querySelector('#comment').value,
            // commentAuthor: 
        },
    });

    return (
        <div></div>
    );

};

export default Comment;