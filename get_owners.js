// Import necessary modules
const { Alchemy, Network } = require("alchemy-sdk");
require('dotenv').config();

const config = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {
  // TIMEPieces contract address
  const address = "0xDd69da9a83ceDc730bc4d3C56E96D29Acc05eCDE";

  // Safe Haven Token ID
  const tokenId = 4254;

  // Get owner of NFT
  const owner = await alchemy.nft.getOwnersForNft(address, tokenId);
  console.log(owner);
};

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