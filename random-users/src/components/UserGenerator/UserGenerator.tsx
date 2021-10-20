import React, { useState, useEffect } from "react";
import UserService from "../../services/UserService";
import IUser from "../../types/User";

const UserGenerator : React.FC = () => {
    const [ user, setUser ] = useState<IUser["user"]>();    

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        UserService.get()
        .then(response => {
            console.log(response.data);
            setUser(response.data.results[0]);
        })
        .catch(e => {
            console.log(e);
        });
    }

    return (
        <div>
            <h1> { user?.name.first} </h1>
        </div>
    );
}

export default UserGenerator;