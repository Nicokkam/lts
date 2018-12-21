import axios from 'axios';
import { toast } from 'react-toastify';
export default class TorqueToolService {

    _url = process.env.REACT_APP_SERVER + '/api/torquetool'

    async get() {
        const a = await axios.get('https://jsonplaceholder.typicode.com/todos/')
        // axios.get('http://10.8.66.81/instances')
        return a.data;
    }

    async getById(id) {

    }

    async create(torqueTool) {
        await axios.post(this._url, torqueTool)
            .then(d => {
                toast.success('Ferramenta adicionada com sucesso');
                return d.data;
            })
            .catch(e => {
                console.error(e);
                toast.error('Erro no servidor')
            });
    }

    async update(torqueTool) {

    }

    async delete(id) {

    }

}