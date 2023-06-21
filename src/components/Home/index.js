import React, { useEffect, useState } from "react";

import api from "../../services/api";


import "./style.css";



function Home() {

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

export default Home;