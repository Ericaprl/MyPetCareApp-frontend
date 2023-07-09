
// Sign Up/Register: 
// This page allows new users to create an account on your website, 
// providing their basic information and possibly their pet's information. 
// Profile: Once users are logged in, they can have a dedicated profile page 
// where they can manage their account details, update pet information, 
// view appointment history, 
// or access any personalized features you offer.


import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./style.css";




function Profile() {

    const [user, setUser] = useState([]);
    
    useEffect(() => {
        const token = localStorage.getItem("@token:Petecareapp");

        console.log(token);

        if (token) {
            api.get("/users", {
                headers: { "Authorization": `Bearer ${token}` }

            }).then(response => setUser(response.data));

        }

    }, []);

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>First Nome</th>
                        <th>Last Nome</th>
                        <th>E-mail</th>
                        <th>Usuário</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((users) => {
                        return (
                            <tr key ={users._id}>
                                <td>{users.fname}</td>
                                <td>{users.lname}</td>
                                <td>{users.email}</td>
                                <td>{users.username}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Profile;
