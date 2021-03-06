import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../Utils/auth';
import { ADD_USER } from '../Utils/mutations';

// 3/11/22 npm run build warnings'handleFormSubmit' and 'handleChange' assigned a value but never used 

function SignUp(props) {
    
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    // const handleFormSubmit

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                username: formState.username,
                password: formState.password,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    // const handleChange

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // return

    return (
        <div>
            <Link></Link>
        </div>
    );

};

export default SignUp;