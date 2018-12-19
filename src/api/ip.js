import axios from 'axios';

export default class IPService {

    _url = process.env.REACT_APP_SERVER + '/api/ip';

    async get(...params) {
        let queryString = "?";
        params.map(p => queryString += Object.keys(p) + '=' + Object.values(p) + '&');
        queryString = queryString.slice(0,-1);
        return await axios.get(this._url + queryString).then(data => data.data);
    }

    async getById(id) {
        return await axios.get(this._url + '/' + id).then(data => data.data);
    }

    async create(ip) {

    }

    async update(id) {

    }

    async delete(id) {

    }

}