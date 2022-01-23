const main = async () => {
  // generate instances of contract-Transactions
  const Transactions = await hre.ethers.getContractFactory("Transactions");

  // one instance of contract
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
};
//  contract deployed on blockchain

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
