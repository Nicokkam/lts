import axios from 'axios';

export default class WorkplaceService {
    
    _api = process.env.REACT_APP_SERVER + '/api/';

    async getProcesses(id = "") {        
        return await axios.get(this._api + 'process/' + id).then(d => d.data);
    }

    async getStations(id = "") {
        return await axios.get(this._api + 'station/' + id).then(d => d.data);
    }

    async getWorkplace(id = "") {
        return await axios.get(this._api + 'workplace/' + id).then(d => d.data);
    }

    async getByParameter(a ,...b) {
        var q = "";
        b.map(c => {
           return q += Object.keys(c) + '=' + Object.values(c) + "&";
        })
        q = q.slice(0,-1)
        console.log(q)
        
        console.log(this._api + 'ip?' + q )
        return axios.get(this._api + 'ip?' + q).then(d => d.data);
    }



}