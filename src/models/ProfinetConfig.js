import AddressArea from "./AdressArea";

export default class ProfinetConfig {
    id;
    profinetId = 0;
    profinetName = "";
    hardwareDeviceId = 0;
    hardwareId = 0;
    WR_IDENTIFIER = new AddressArea();
    WR_ABORT_JOB = new AddressArea();
    WR_RESET_IDENTIFIER = new AddressArea();
    WR_JOB_OFF = new AddressArea();
    WR_INCREMENT = new AddressArea();
    WR_DECREMENT = new AddressArea();
    WR_BY_PASS_PSET = new AddressArea();
    RD_BATCH_REMAINING = new AddressArea();
    RD_BATCH_COMPLETED = new AddressArea();
    RD_JOB_OK = new AddressArea();
    RD_JOB_RUNNING = new AddressArea();
    RD_IDENTIFIED = new AddressArea();
    RD_ABORTED = new AddressArea();
    RD_JOB_OFF = new AddressArea();
    RD_TIMESTAMP = new AddressArea();
    RD_JOB_ID = new AddressArea();
}