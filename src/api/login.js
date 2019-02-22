// TODO: Buscar na matriz a url do serviço

import axios from 'axios';

export default class LoginService {

    _url = process.env.REACT_APP_LOGIN_SERVER;
    _user = {
        isLogged: false,
        ssb: ''
    };

    async auth(login) {         
        try {
            const res = await axios.post(this._url, login);            
            switch(res.data.ValidateUserResult) {
                case "Ok": 
                    this._user.isLogged = true;
                    this._user.ssb = login.user;
                    return login.user;                
                default:
                    return  false;
                }
        }
        catch (err) {
            console.error(err);
        }
        // await axios.post(this._url, login).then((res) => {
        //     const response = res.data;
        //     if (response.ValidateUserResult !== "Ok") {
        //         console.error('User not authenticated');
        //         return false;
        //     }
        //     if (response.ValidateUserResult === "Ok") {
        //         console.log(`User logged ${login.user}`);
        //         this._user.ssb = login.user;
        //         this._user.isLogged = true;
        //         return true;
        //     }
        // });
    }

    validate() {
        if (this._user.isLogged)
            return true;
        return false;
    }

    logoff() {
        this._user.isLogged = false;
        this._user.ssb = '';
    }


}