import web3 from "./getWeb3";
import Factory from "./build/factory.json";

const instance = new web3.eth.Contract(
    JSON.parse(Factory.interface), "0xa204dd4ca2f31af1c70fc12896e710e92ea0464b"
);

export default instance;
 