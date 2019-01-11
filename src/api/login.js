// TODO: Buscar na matriz a url do serviço

import axios from 'axios';

export default class LoginService {
    
    _url = process.env.REACT_APP_LOGIN_SERVER;

    user = {};

    async auth(login) { //user, pass        
        await axios.post(this._url, login).then((res) => {
            const response = res.data;
            if (response.ValidateUserResult === "Ok") {

            }
        });
    }

    validate() {
        if (this.user.isLogged) 
            return true;        
        return false;
    }

    async logoff() {
        // user = {};
    }

}