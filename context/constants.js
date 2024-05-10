//Dlt: 0x52Bc319BE61b92006c979B4dAd75337dc00aDF7F
//Africa: 0x117B8d82b60e3e646F80EFA7816e46471e54b799
//Liquidity: 0x17e411d7757fa8F66612fe40691c34Fc76C0C0041





import { ethers } from "ethers";
import Web3Modal from "web3modal";

//INTERNAL IMPORT
import factoryAbi from "./factoryAbi.json";
import ERC20ABI from "./abi.json";

import Dlt from "./Dlt.json";
import Africa from "./Africa.json";
import Liquidity from "./Liquidity.json";



//Token
export const Dlt_ADDRESS = "0x52Bc319BE61b92006c979B4dAd75337dc00aDF7F"
export const Dlt_ABI = Dlt.abi;


//Token SAle
export const Africa_ADDRESS = "0x117B8d82b60e3e646F80EFA7816e46471e54b799"
export const Africa_ABI = Africa.abi;

//Liquidity
export const Liquidity_address = "0x17e411d7757fa8F66612fe40691c34Fc76C0C0041"
export const Liquidity_ABI = Liquidity.abi;




export const FACTORY_ABI = factoryAbi;
export const FACTORY_ADDRESS = "0x1F98431c8aD98523631AE4a59f267346ea31F984"
export const positionManagerAddress = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88"

const fetchContract = (signer, ABI, ADDRESS) =>
new ethers.Contract(ADDRESS, ABI, signer);


export const web3Provider = async() => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);


        return provider;
    } catch (error) {
        console.log(error);
    }
};


export const CONNECTING_CONTRACT = async (ADDRESS) => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const network = await provider.getNetwork();


        const signer = provider.getSigner();
        const contract = fetchContract(signer, ERC20ABI, ADDRESS);

        //USER ADDRESS
        const userAddress = signer.getAddress();
        const balance = await contract.balanceOf(userAddress);

        const name = await contract.name();
        const symbol = await contract.symbol();
        const supply = await contract.totalSupply();
        const decimals = contract.decimals();
        const address = contract.address;

        const token = {
            address: address,
            name: name,
            symbol: symbol,
            decimals: decimals,
            supply: ethers.utils.formatEther(supply.toString()),
            balance: ethers.utils.formatEther(balance.toString()),
            chainId: network.chainId,
        };

        return token;

    } catch (error) {
    console.log(error);
    }
    
};

export const internalDltContract = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const contract = fetchContract(provider, Dlt_ABI, Dlt_ADDRESS);
        return contract;
    }catch (error) {
        console.log(error);
    }
};



export const internalAfricaContract = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const contract = fetchContract(provider, Africa_ABI, Africa_ADDRESS);
        return contract;
    }catch (error) {
        console.log(error);
    }
};


export const internalAddLiquidity = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const contract = fetchContract(provider, Liquidity_ABI, Liquidity_address);
        return contract;
    }catch (error) {
        console.log(error);
    }
};



export const getBalance = async () => {
    try{
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        return await signer.getBalance();
    } catch (error) {
        console.log(error);
    }
};












// import { ethers } from "ethers";
// import Web3Modal from "web3modal";

// // Import contract ABIs
// import factoryAbi from "./factoryAbi.json";
// import ERC20ABI from "./abi.json";

// // Import contract artifacts
// import Dlt from "./Dlt.json";
// import Africa from "./Africa.json";
// import Liquidity from "./Liquidity.json";

// // Contract addresses
// export const Dlt_ADDRESS = "0x52Bc319BE61b92006c979B4dAd75337dc00aDF7F";
// export const Africa_ADDRESS = "0x117B8d82b60e3e646F80EFA7816e46471e54b799";
// export const Liquidity_address = "0x17e411d7757fa8F66612fe40691c34Fc76C0C0041";
// export const FACTORY_ADDRESS = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
// export const positionManagerAddress = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";

// // Function to fetch contract instance
// const fetchContract = (signer, ABI, ADDRESS) =>
//   new ethers.Contract(ADDRESS, ABI, signer);

// // Function to get Web3 provider
// export const web3Provider = async () => {
//   try {
//     const web3Modal = new Web3Modal();
//     const connection = await web3Modal.connect();
//     return new ethers.providers.Web3Provider(connection);
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Function to connect to contract and fetch token details
// export const CONNECTING_CONTRACT = async (ADDRESS) => {
//   try {
//     const provider = await web3Provider();
//     const network = await provider.getNetwork();
//     const signer = provider.getSigner();
//     const contract = fetchContract(signer, ERC20ABI, ADDRESS);

//     // Get user address
//     const userAddress = await signer.getAddress();

//     // Fetch token details
//     const [name, symbol, supply, balance, decimals] = await Promise.all([
//       contract.name(),
//       contract.symbol(),
//       contract.totalSupply(),
//       contract.balanceOf(userAddress),
//       contract.decimals(),
//     ]);

//     // Format token details
//     const token = {
//       address: ADDRESS,
//       name,
//       symbol,
//       decimals,
//       supply: ethers.utils.formatEther(supply.toString()),
//       balance: ethers.utils.formatEther(balance.toString()),
//       chainId: network.chainId,
//     };

//     return token;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Function to fetch Dlt contract instance
// export const internalDltContract = async () => {
//   try {
//     const provider = await web3Provider();
//     const contract = fetchContract(provider, Dlt.abi, Dlt_ADDRESS);
//     return contract;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Function to fetch Africa contract instance
// export const internalAfricaContract = async () => {
//   try {
//     const provider = await web3Provider();
//     const contract = fetchContract(provider, Africa.abi, Africa_ADDRESS);
//     return contract;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Function to fetch Liquidity contract instance
// export const internalAddLiquidity = async () => {
//   try {
//     const provider = await web3Provider();
//     const contract = fetchContract(provider, Liquidity.abi, Liquidity_address);
//     return contract;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Function to get balance
// export const getBalance = async () => {
//   try {
//     const provider = await web3Provider();
//     const signer = provider.getSigner();
//     return await signer.getBalance();
//   } catch (error) {
//     console.log(error);
//   }
// };




// //1.15:47








