import web3 from "./getWeb3";
import Bidder from "./build/bidder.json";

export default (address)=>{
    return new web3.eth.Contract(
        JSON.parse(Bidder.interface),
        address
    );
};