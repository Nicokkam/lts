export default class TorqueTool {
    id;
    ssb;
    protocol = 1;
    manufacturerId = 1;
    modelId = 1;
    ethernetIPId = 0;
    port = 4545;
    profinetIPId = 0;
    profinetConfigId;
    description;
    collectResults = 0;
    controllerSSB;
    toolSerial;
    firmware;
    isWireless = 0;
}