// Import necessary modules
const { Alchemy, Network } = require("alchemy-sdk");
require('dotenv').config();

const config = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {
  // TIMEPieces contract address -- replace with desired contract address
  const address = "0xDd69da9a83ceDc730bc4d3C56E96D29Acc05eCDE";

  // Safe Haven Token ID -- replace with desired tokenID
  const tokenId = 4254;

  // Get and print owner(s) of NFT with Alchemy API endpoint
  const owner = await alchemy.nft.getOwnersForNft(address, tokenId);
  console.log(owner);
};

main(); // Run main function