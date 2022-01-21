import React from 'react';
import { useMutation } from "apollo/client";
import { ADD_COMMENT } from "../Utils/mutations";
import auth from "../Utils/auth";

const Comment = (props) => {

    const [addComment] = useMutation(ADD_COMMENT);

    return (
        <div></div>
    );

};

export default Comment;