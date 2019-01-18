// TODO: Buscar na matriz a url do serviço

import axios from 'axios';

export default class LoginService {
    
    _url = process.env.REACT_APP_LOGIN_SERVER;
    _user = {};

    async auth(login) { //user, pass        
        await axios.post(this._url, login).then((res) => {
            const response = res.data;
            console.log(123);

            if (response.ValidateUserResult === "Ok") {
                this._user.isLogged = true;
            }
        });
    }

    validate() {
        if (this._user.isLogged) 
            return true;        
        return false;
    }

    async logoff() {
        // user = {};
    }

}