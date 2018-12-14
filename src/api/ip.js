import axios from 'axios';
import CONFIG from '../config';

export default class TorqueToolService {

    _url = CONFIG.apiServer + '/api/ip/';

    async get() {
        return await axios.get(this._url).then(data => data.data);
    }

    async getById(id) {
        return await axios.get(this._url + id).then(data => data.data);
    }

    async create(ip) {

    }

    async update(id) {

    }

    async delete(id) {

    }

}