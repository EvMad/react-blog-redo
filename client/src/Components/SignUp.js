import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../Utils/auth';
import { ADD_USER } from '../Utils/mutations';

function SignUp(props) {
    
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    // const handleFormSubmit

}