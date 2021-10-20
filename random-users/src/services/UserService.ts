import { AxiosResponse } from 'axios';
import http from '../http-common';
import UserResponse from '../types/User';

const get = () : Promise<AxiosResponse<UserResponse, any>> => {
    return http.get('/');
}

/*
const post = ()
...
*/

const UserService = {
    get
};

export default UserService;