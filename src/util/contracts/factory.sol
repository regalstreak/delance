pragma solidity^0.4.24;
contract factory{
  //  address public account=msg.sender;
    mapping(address=>address) public sponsmap;
    mapping(address=>address) public bidmap;
    function factory() public payable{
        
    }
    function create_spons()public payable returns(address){
        address new_spons = new spons(msg.sender);
        sponsmap[msg.sender] = new_spons;
        return new_spons;

    }
    function create_bidder()public returns(address){
        address new_bidder = new bidder(msg.sender);
        bidmap[msg.sender] = new_bidder;
        return new_bidder;
    }
    function showbalance()public returns(uint){
        return address(this).balance;
    }
}

contract spons{
    address public account;
    address[] public bidders;
    mapping(address=>address) public escrowmap;
    function spons(address accounts) public payable{
        account = accounts;
    }
    function create_escrow(address bidder)public returns(address){
        address new_escrow = new escrow(bidder);
        escrowmap[bidder] = new_escrow;
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
    address public account;
    function bidder(address accounts)public payable{
        account = accounts;
    }
    string[] public sponsors;
    function showbalance()public returns(uint){
        return address(this).balance;
    }
}

contract escrow{
    address reciever;
    uint val;
    function escrow(address bidders)public{
        reciever = bidders;
    }
    function addbalance()public payable{
        
    }
    function payment_done()public payable returns(address){
        reciever.transfer(address(this).balance);
        return reciever;
    }
    function payment_cancel()public payable returns(address){
        msg.sender.transfer(address(this).balance);
        return msg.sender;
    }
    function showbalance()public view returns(uint){
        return address(this).balance;
    }
    function showbidder()public view returns(address,address){
        return (reciever,msg.sender);
    }
}