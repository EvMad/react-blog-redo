import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../Utils/mutations';
import Auth from '../Utils/auth';

//function Login(props)