pragma solidity >=0.4.21 <0.6.0;

contract ApprovalContract {
    address public sender;
    address payable public receiver;
    address public constant approver = 0x629a56C6ef6b5bda6091Aecac00540783dB561Bf;

    function deposit(address payable _receiver) external payable {
        require(msg.value > 0);
        sender = msg.sender;
        receiver = _receiver;
    }

    function viewApprover() external pure returns(address) {
        return(approver);
    }

    function approve() external {
        require(msg.sender == approver);
        receiver.transfer(address(this).balance);
    }
}