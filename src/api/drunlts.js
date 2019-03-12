import axios from 'axios';

export default class DrunLTSApi {

    _url = process.env.REACT_APP_SERVER;   
    _api = 'api/drun-lts/';

    async getByDate(startDate, endDate) {
        startDate = this._convertDate(startDate);
        endDate = this._convertDate(endDate);
        const url = `${this._url}/${this._api}?startDate=${startDate}&endDate=${endDate}`;
        try {
            const data = await axios.get(url);
            return data;
        } 
        catch(err) {
            console.error(err);
            return false;
        }
    }

    _convertDate(date) {
        if (!date) {
            return "";
        }
        const y = date.getFullYear();
        const m = date.getMonth() + 1;
        const d = date.getDate();
        return y + '-'+ m +'-' + d;              
    }

}
