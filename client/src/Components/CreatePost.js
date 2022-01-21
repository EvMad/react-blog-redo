import React, { useState } from "react";
import { useMutation } from "apollo/client";
import { ADD_POST } from "../Utils/mutations";
// import css
import auth from "../Utils/auth";

const CreatePost = (props) => {

    const [addPost] = useMutation(ADD_POST);
    
}