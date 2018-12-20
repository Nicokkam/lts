import axios from 'axios';

export default class ProfinetConfigService {

    _url = process.env.REACT_APP_SERVER + '/api/profinetconfig';

    async get() {

    }

    async getById(id) {

    }

    async create(profinetConfig) {
        return await axios.post(this._url, profinetConfig).then(d => d.data).catch(e => console.log(e));
    }

    async update(profinetConfig) {

    }

    async delete(id) {

    }

}