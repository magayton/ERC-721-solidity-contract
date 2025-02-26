async function main() {
  // if you changed the name of the contract, be sure to update this here!
  const MyToken = await hre.ethers.getContractFactory("FelixNFT");

  const nft = await MyToken.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);
 
  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  await nft.safeMint(await signer0.getAddress(), "ipfs://QmUTEid6nnc5CKhJzn4eVbsyxpybdXDXx9xpRWSyxDfzLc");

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });