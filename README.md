## Overview
This repository contains a JavaScript script that utilizes Alchemy's SDK to fetch the owner(s) of a NFT given a contract address and token ID. To see more details, refer to the [Alchemy API reference](https://docs.alchemy.com/reference/getownersfortoken):

## Steps to Run

Before running the script, ensure that you have [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed on your system. 

Follow these steps to run the script:

1. Clone this repository to your local machine:
`git clone https://github.com/vszammit/get-owners-of-nft.git`


2. Navigate to the project folder: `cd get-owners-of-nft`


3. Open the `sample.env` file and update the value for the API Key to your own value and rename file to `.env`. If you don't have an Alchemy API Key yet you can [create one for free here](https://alchemy.com/?a=starter-code).

4. Open `getOwners.js` and update the value of the contract address on line 13 and the token ID on line 16 to reflect the NFT that you will be querying. 


5. Install the Alchemy SDK and the `dotenv` package running either of the following commands:
   - `npm i alchemy-sdk dotenv`
   - `yarn add alchemy-sdk dotenv`

6. Run the script in the terminal: `node getOwners.js`


By following these steps, the script will execute and fetch the owner(s) of the NFT included in the specified collection address and token ID, printing out an array of the owners.
