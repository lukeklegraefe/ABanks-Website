import React, { useState } from 'react';
import './Pages.css';
import './Login.css';
import Axios from 'axios';

export default function Logout() {
    localStorage.removeItem('token');
    window.location.reload(true);
}