var ApprovalCOntract = artifacts.require("ApprovalContract");

module.exports = function(deployer) {
    deployer.deploy(ApprovalCOntract);
}