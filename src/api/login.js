// TODO: Buscar na matriz a url do serviço

import axios from 'axios';

export default class LoginService {
    
<<<<<<< HEAD
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
=======
    

    async auth({login}) {

>>>>>>> 9992178fa5b9443493fd1a3cd460220d3c460f78
    }

    async logoff() {

    }


}