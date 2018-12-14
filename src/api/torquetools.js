import axios from 'axios';
import CONFIG from '../config';

export default class TorqueToolService {

    async get() {
        const a = await axios.get('https://jsonplaceholder.typicode.com/todos/')
        // axios.get('http://10.8.66.81/instances')
        return a.data;        
    }

    async getById(id) {
        
    }

    async create(torqueTool) {

    }

    async update(id, torqueTool) {

    }

    async delete(id) {
        
    }

}