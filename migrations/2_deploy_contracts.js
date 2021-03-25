// migrating the appropriate contracts
var FarmerRole = artifacts.require("./FarmerRole.sol");
var ConsumerRole = artifacts.require("./ConsumerRole.sol");
var RetailerRole = artifacts.require("./RetailerRole.sol");
var DistributorRole = artifacts.require("./DistributorRole.sol");
var SupplyChain = artifacts.require("SupplyChain");

module.exports = function(deployer) {
  deployer.deploy(ConsumerRole);
  deployer.deploy(DistributorRole);
  deployer.deploy(FarmerRole);
  deployer.deploy(RetailerRole);
  deployer.deploy(SupplyChain);
};
