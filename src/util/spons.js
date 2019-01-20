import web3 from "./getWeb3";
import Spons from "./build/spons.json";

export default (address)=>{
    return new web3.eth.Contract(
        JSON.parse(Spons.interface),
        address
    );
};