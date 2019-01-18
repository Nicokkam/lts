export default class AddressArea {

    id;
    area = 0;
    dBNumber = 0;
    byteOffset = 0;
    bit = 0;

    constructor(property) {
        if (!property) return;
        this._getDefaultValues(property);
        
    }

    _getDefaultValues(property) {        
        this.area = 81;
        const firstLetter = property.slice(0, 1);
        if (firstLetter === 'w') {
            this.area = 82;
        }
        switch (property) {
            case 'wR_IDENTIFIER':
                break;
            case 'wR_ABORT_JOB':
                break;
            case 'wR_RESET_IDENTIFIER':
                break;
            case 'wR_JOB_OFF':
                break;
            case 'wR_INCREMENT':
                break;
            case 'wR_DECREMENT':
                break;
            case 'wR_BY_PASS_PSET':
                break;
            case 'rD_BATCH_REMAINING':
                break;
            case 'rD_BATCH_COMPLETED':
                break;
            case 'rD_JOB_OK':
                break;
            case 'rD_JOB_RUNNING':
                break;
            case 'rD_IDENTIFIED':
                break;
            case 'rD_ABORTED':
                break;
            case 'rD_JOB_OFF':
                break;
            case 'rD_TIMESTAMP':
                break;
            case 'rD_JOB_ID':
                break;
            default:
                break;
        }
    }

    _generateDefaultOffset(byte)  { }

}



