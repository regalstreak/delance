import web3 from "./getWeb3";
import Escrow from "./build/escrow.json";

export default (address)=>{
    return new web3.eth.Contract(
        JSON.parse(Escrow.interface),
        address
    );
};