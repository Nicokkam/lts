import axios from 'axios';
import CONFIG from '../config';

export default class TorqueToolService {


    get() {
        axios.get('http://10.8.66.81/instances')
        .then((a) => console.log(a))
    }

    getById() {
        
    }

}