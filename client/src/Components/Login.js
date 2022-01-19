import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../Utils/mutations';
import Auth from '../Utils/auth';

//function Login(props)

function Login(props) {

    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const mutationResponse = await login({
                variables: { username: formState.username, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            console.log(mutationResponse);
            Auth.login(token);
        } catch (e) {
            console.log(e)
        }
    };

    // const handleChange
    
};

