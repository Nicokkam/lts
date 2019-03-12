import axios from 'axios';

export default class EquipmentService {

    // _api = process.env.REACT_APP_SERVER + '/api/';
    _api = process.env.REACT_APP_SERVER_DEBUG + '/api/'; // Debug Only

    async get() {
            
    }

    async getById() {

    }

    async getEquipTypes() {
        const url = this._api + 'equiptype';
        try {
            return await axios.get(this._url);
        } catch(err) {
            console.log(err);
            return null;
        }    
    }

    async getStationEquipments() {

    }


}