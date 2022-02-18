import React from 'react';
import { useMutation } from "apollo/client";
import { ADD_COMMENT } from "../Utils/mutations";
import auth from "../Utils/auth";

const Comment = (props) => {

    const [addComment] = useMutation(ADD_COMMENT);

    //const handleFormSubmit - needs #ID's for querySelector

    //2/18/22 npm run build error re: await addComment

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