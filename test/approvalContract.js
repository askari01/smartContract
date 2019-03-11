const ApprovalContract = artifacts.require('../../contracts/ApprovalContract.sol');

contract('ApprovalCOntracts', function(accounts) {
    it('initiates contract', async function() {
        const contract = await ApprovalContract.deployed();
        const approver = await contract.approver.call();
        assert.equal(approver, "0x629a56C6ef6b5bda6091Aecac00540783dB561Bf", "approver doesn't match");
    })
})