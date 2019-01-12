import axios from 'axios';
import {toast} from 'react-toastify';

export default class ProfinetConfigService {

    _url = process.env.REACT_APP_SERVER + '/api/profinetconfig';

    async get() {

    }

    async getById(id) {

    }

    async create(profinetConfig) {
        return await axios.post(this._url, profinetConfig)
        .then(d => {
            toast.success('✅ SALVO COM SUCESSO');
            return d.data;
        })
        .catch(e => {
            toast.error('⛔️ ERRO NO SERVIDOR');
            console.error(e);
        });
    }

    async update(profinetConfig) {

    }

    async delete(id) {

    }

}