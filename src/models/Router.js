class Router {
    constructor(o) {
        this.id = o.id;
        this.ethernetIP = o.ethernetIP;
        this.ethernetMAC = o.ethernetMAC;
        this.profinetName = o.profinetName;
        this.wSSID = o.wSSID;
        this.bSSIDMAC = o.bSSIDMAC;
        this.channel = o.channel;
        this.location = o.location;
        this.wdsPartner1 = o.wdsPartner1;
        this.wdsPartner2 = o.wdsPartner2;
    }

}

export default Router;
