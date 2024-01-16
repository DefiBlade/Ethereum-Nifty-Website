import { ethers } from "ethers"
import { getContractWithSigner, getIsFreeMinting } from "./contract"


export const mintNFT = async (
  walletAddress,
  setMintLoading,
  numbers
) => {

  const contract = getContractWithSigner();

  // contract.on("mintToken(uint256)", (newId) => {
  //   const address = ethers.utils.getAddress(to)
  //   const newMintId = ethers.BigNumber.from(newId).toNumber()

  //   setNewMint([address, newMintId])
  // })

  try {
    let txhash = await contract.mintToken(numbers, {
      value: ethers.BigNumber.from(1e9).mul(
        ethers.BigNumber.from(1e9).mul(10).div(100).mul(numbers)
      ),
      from: walletAddress,
    })

    let res = await txhash.wait();
    setMintLoading(false);

    if (res.transactionHash) {
      return {
        success: true,
        status: `Successfully minted ${numbers} Nodestones.`,
      }
    } else {
      return {
        success: false,
        status: "Transaction failed",
      }
    }
  } catch (err) {
    setMintLoading(false)
    return {
      success: false,
      status: err.message,
    }
  }
}

export const mintFeeNFT = async (
  walletAddress,
  setMintLoading,
  numbers
) => {

  const contract = getContractWithSigner();
  try {
    let txhash = await contract.mintToken(numbers, {
      value: ethers.BigNumber.from(1e9).mul(
        ethers.BigNumber.from(1e9).mul(10).div(100).mul(0)
      ),
      from: walletAddress,
    })

    let res = await txhash.wait();
    setMintLoading(false);

    if (res.transactionHash) {
      return {
        success: true,
        status: `Successfully minted ${numbers} Nodestones.`,
      }
    } else {
      return {
        success: false,
        status: "Transaction failed",
      }
    }
  } catch (err) {
    setMintLoading(false)
    return {
      success: false,
      status: err.message,
    }
  }
}


export const mintPass = async (
  walletAddress,
  setMintLoading,
  numbers
) => {

  const contract = getContractWithSigner();
  try {

    let multiply;
    let isFree = await getIsFreeMinting(numbers, walletAddress);
    
    if (numbers === 1) multiply = 5;
    else if (numbers === 2) multiply = 9;
    else if (numbers === 3) multiply = 12;
    if (isFree) multiply = 0;

    let txhash = await contract.mintPass(numbers, {
      value: ethers.BigNumber.from(1e9).mul(
        ethers.BigNumber.from(1e9).mul(1).div(100).mul(multiply)
      ),
      from: walletAddress,
    })

    let res = await txhash.wait();
    setMintLoading(false);

    if (res.transactionHash) {
      return {
        success: true,
        status: `Successfully minted ${numbers} NiftyPass.`,
      }
    } else {
      return {
        success: false,
        status: "Transaction failed",
      }
    }
  } catch (err) {
    setMintLoading(false)
    return {
      success: false,
      status: err.message,
    }
  }
}
