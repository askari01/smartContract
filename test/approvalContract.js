const ApprovalContract = artifacts.require('../../contracts/ApprovalContract.sol');

contract('ApprovalCOntracts', function(accounts) {
    it('initiates contract', async function() {
        const contract = await ApprovalContract.deployed();
        const approver = await contract.approver.call();
        assert.equal(approver, "0x629a56C6ef6b5bda6091Aecac00540783dB561Bf", "approver doesn't match");
    });

    if('takes a deposit', async function() {
        const contract = await ApprovalContract.deployed();
        await contract.deposit(accounts[0], {value: 1e+18, from: accounts[1]});
        assert.equal(web3.eth.getBalance(contract.address), 1e+18, "ammount did not match");
    });
})