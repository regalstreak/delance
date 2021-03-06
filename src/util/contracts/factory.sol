pragma solidity^0.4.24;
contract factory{
    mapping(address=>address) public sponsmap;
    mapping(address=>address) public bidmap;
    constructor() public payable{
    }
    function create_spons(address account)public payable returns(address){
        address new_spons=new spons(account);
        sponsmap[msg.sender]=new_spons;
        return new_spons;

    }
    function create_bidder(address account)public returns(address){
        address new_bidder=new bidder(account);
        bidmap[msg.sender]=new_bidder;
        return new_bidder;
    }
    function showbalance()public returns(uint){
        return address(this).balance;   
    }
}

contract spons{
    address[] public bidders;
    constructor(address accounts) public payable{
        account=accounts;
    }
    address public account;
    mapping(address=>address) public reciever_escrow;
    function create_escrow(address bidder)public returns(address){
        address new_escrow=new escrow(bidder);
        reciever_escrow[bidder]=new_escrow;
        bidders.push(bidder);
        return new_escrow;
    }
    function showbalance()public returns(uint){
        return address(this).balance;
    }
    function addbalance()public payable{
        
    }
}

contract bidder{
    constructor(address accounts)public payable{
        account = accounts;
    }
    string[] public sponsors;
    address public account;
    function showbalance()public returns(uint){
        return address(this).balance;
    }
}

contract escrow{
    address reciever;
    uint val;
    constructor(address bidders)public{
        reciever=bidders;
    }
    function addbalance()public payable{
        
    }
    function payment_done()public payable returns(address){
        address(reciever).transfer(address(this).balance);
        return reciever;
    }
    function paymen_cancel()public payable returns(address){
        msg.sender.transfer(address(this).balance);
        return msg.sender;
    }
    function showbalance()public view returns(uint){
        return address(this).balance;
    }
}