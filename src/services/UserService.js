import axios from 'axios';
import GlobalApp from './GlobalApp';

function buildHeader() {
    var token = localStorage.getItem('access_token');

    let headers = {};
    if (token) {
        headers = {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Authorization': 'Bearer ' + token
        };
    } else {
        headers = {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*'
        };
    }
    return headers;
}

export const UserService = {

    createUser: async(user) => {
        let params = JSON.stringify(user);
        let headers = {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*'
        };
        const res = await axios.post(GlobalApp.URLuser + '/createuser', params, { headers: headers })
            .then(resp => {
                return resp.data;
            })
            .catch(err => {

                return err.response;
            });

        return res;

    },
    confirmLogin: async(user) => {


        let params = JSON.stringify(user);
        let headers = buildHeader();

        const result = await axios.post(GlobalApp.URLuser + '/confirmlogin', params, { headers: headers })
            .then(resp => {

                if (resp.data.token) {
                    localStorage.setItem('access_token', resp.data.token);

                }
                return resp.data;
            })
            .catch(err => {
                return err.response.data;
            });
        return result;

    },
    logOut: async() => {
        localStorage.removeItem('access_token');

    },
    getUser: async(id) => {
        let headers = buildHeader();

        const res = await axios.post(GlobalApp.URLuser + '/getuserbyid' + id, { headers: headers });
        return res.user;
    },

    getUserByToken: async() => {

        let headers = buildHeader();


        const res = await axios.get(GlobalApp.URLuser + '/getuserbytoken', { headers: headers })
            .then(resp => {


                // if (resp.token) {
                //     localStorage.setItem('access_token', resp.token);
                // }
                return resp.data;
            })
            .catch(err => {

                return err.response.data.status;
            });



        return res;
    },
    loggedIn: async() => {
        return (localStorage.getItem('access_token') !== null);
    }
}