import React, { useEffect, useState } from 'react';
import User from '../User/User';
import "./Users.css"

const Users = () => {

    const [users,setUser]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

    return (
        <div>
            <h1>users {users.length}</h1>
        <div className='container'>
        {
        users.map(user=><User user={user} key={user.id}></User>)
        }
        </div>
        </div>
    );
};

export default Users;