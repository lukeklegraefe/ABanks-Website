import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export function Button() {
    if(localStorage.getItem('token')){
        return (
            <Link to='/logout'>
                <button className='btn'>Logout</button>
            </Link>
        );
    }
    else {
        return (
            <Link to='/login'>
                <button className='btn'>Login</button>
            </Link>
        );
    }
}

