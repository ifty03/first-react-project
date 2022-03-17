import React from 'react';
import './User.css'

const User = (props) => {
    const {name,email,phone,address}=props.user
    return (
        <div className='box'>
            <h3>Name: {name}</h3>
            <h3>Name: {email}</h3>
            <h3>Name: {phone}</h3>
            <h3>Name: {address.street}</h3>
        </div>
    );
};

export default User;