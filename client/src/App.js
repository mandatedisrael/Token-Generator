import eth from './eth.svg';
import './App.css';
import Web3 from "web3";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import WalletConnectProvider from "@walletconnect/web3-provider";




// const providerOptions = {
//   coinbasewallet: {
//     package: CoinbaseWalletSDK,
//     options: {
//       appName: "Dami token Maker",
//       infuraId: "c7fa6f7b272342f2bb62484bc011aa20",
//       chainId: 4,
//       darkMode:true

//     }
//   },

//   walletconnect:{
//     package: WalletConnectProvider,
//     options:{
//       infuraId:"c7fa6f7b272342f2bb62484bc011aa20"
//     }
//   }

// };

const ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "decimal",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "initialSupply",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
var account;
let tokenAddress;
let  byteCode ='60806040523480156200001157600080fd5b5060405162001bc038038062001bc08339818101604052810190620000379190620004f0565b83838160039080519060200190620000519291906200022a565b5080600490805190602001906200006a9291906200022a565b5050506200009d338360ff16600a62000084919062000723565b8362000091919062000774565b620000a760201b60201c565b5050505062000948565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200011a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001119062000836565b60405180910390fd5b6200012e600083836200022060201b60201c565b806002600082825462000142919062000858565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825462000199919062000858565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002009190620008c6565b60405180910390a36200021c600083836200022560201b60201c565b5050565b505050565b505050565b828054620002389062000912565b90600052602060002090601f0160209004810192826200025c5760008555620002a8565b82601f106200027757805160ff1916838001178555620002a8565b82800160010185558215620002a8579182015b82811115620002a75782518255916020019190600101906200028a565b5b509050620002b79190620002bb565b5090565b5b80821115620002d6576000816000905550600101620002bc565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200034382620002f8565b810181811067ffffffffffffffff8211171562000365576200036462000309565b5b80604052505050565b60006200037a620002da565b905062000388828262000338565b919050565b600067ffffffffffffffff821115620003ab57620003aa62000309565b5b620003b682620002f8565b9050602081019050919050565b60005b83811015620003e3578082015181840152602081019050620003c6565b83811115620003f3576000848401525b50505050565b6000620004106200040a846200038d565b6200036e565b9050828152602081018484840111156200042f576200042e620002f3565b5b6200043c848285620003c3565b509392505050565b600082601f8301126200045c576200045b620002ee565b5b81516200046e848260208601620003f9565b91505092915050565b600060ff82169050919050565b6200048f8162000477565b81146200049b57600080fd5b50565b600081519050620004af8162000484565b92915050565b6000819050919050565b620004ca81620004b5565b8114620004d657600080fd5b50565b600081519050620004ea81620004bf565b92915050565b600080600080608085870312156200050d576200050c620002e4565b5b600085015167ffffffffffffffff8111156200052e576200052d620002e9565b5b6200053c8782880162000444565b945050602085015167ffffffffffffffff81111562000560576200055f620002e9565b5b6200056e8782880162000444565b935050604062000581878288016200049e565b92505060606200059487828801620004d9565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156200062e57808604811115620006065762000605620005a0565b5b6001851615620006165780820291505b80810290506200062685620005cf565b9450620005e6565b94509492505050565b6000826200064957600190506200071c565b816200065957600090506200071c565b81600181146200067257600281146200067d57620006b3565b60019150506200071c565b60ff841115620006925762000691620005a0565b5b8360020a915084821115620006ac57620006ab620005a0565b5b506200071c565b5060208310610133831016604e8410600b8410161715620006ed5782820a905083811115620006e757620006e6620005a0565b5b6200071c565b620006fc8484846001620005dc565b92509050818404811115620007165762000715620005a0565b5b81810290505b9392505050565b60006200073082620004b5565b91506200073d83620004b5565b92506200076c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000637565b905092915050565b60006200078182620004b5565b91506200078e83620004b5565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620007ca57620007c9620005a0565b5b828202905092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006200081e601f83620007d5565b91506200082b82620007e6565b602082019050919050565b6000602082019050818103600083015262000851816200080f565b9050919050565b60006200086582620004b5565b91506200087283620004b5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620008aa57620008a9620005a0565b5b828201905092915050565b620008c081620004b5565b82525050565b6000602082019050620008dd6000830184620008b5565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200092b57607f821691505b60208210811415620009425762000941620008e3565b5b50919050565b61126880620009586000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b22565b60405180910390f35b6100e660048036038101906100e19190610bdd565b610308565b6040516100f39190610c38565b60405180910390f35b61010461032b565b6040516101119190610c62565b60405180910390f35b610134600480360381019061012f9190610c7d565b610335565b6040516101419190610c38565b60405180910390f35b610152610364565b60405161015f9190610cec565b60405180910390f35b610182600480360381019061017d9190610bdd565b61036d565b60405161018f9190610c38565b60405180910390f35b6101b260048036038101906101ad9190610d07565b6103a4565b6040516101bf9190610c62565b60405180910390f35b6101d06103ec565b6040516101dd9190610b22565b60405180910390f35b61020060048036038101906101fb9190610bdd565b61047e565b60405161020d9190610c38565b60405180910390f35b610230600480360381019061022b9190610bdd565b6104f5565b60405161023d9190610c38565b60405180910390f35b610260600480360381019061025b9190610d34565b610518565b60405161026d9190610c62565b60405180910390f35b60606003805461028590610da3565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610da3565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059f565b90506103208185856105a7565b600191505092915050565b6000600254905090565b60008061034061059f565b905061034d858285610772565b6103588585856107fe565b60019150509392505050565b60006012905090565b60008061037861059f565b905061039981858561038a8589610518565b6103949190610e04565b6105a7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103fb90610da3565b80601f016020809104026020016040519081016040528092919081815260200182805461042790610da3565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b60008061048961059f565b905060006104978286610518565b9050838110156104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610ecc565b60405180910390fd5b6104e982868684036105a7565b60019250505092915050565b60008061050061059f565b905061050d8185856107fe565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610617576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e90610f5e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610687576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067e90610ff0565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107659190610c62565b60405180910390a3505050565b600061077e8484610518565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f857818110156107ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e19061105c565b60405180910390fd5b6107f784848484036105a7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561086e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610865906110ee565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d590611180565b60405180910390fd5b6108e9838383610a7f565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096690611212565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a029190610e04565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a669190610c62565b60405180910390a3610a79848484610a84565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ac3578082015181840152602081019050610aa8565b83811115610ad2576000848401525b50505050565b6000601f19601f8301169050919050565b6000610af482610a89565b610afe8185610a94565b9350610b0e818560208601610aa5565b610b1781610ad8565b840191505092915050565b60006020820190508181036000830152610b3c8184610ae9565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b7482610b49565b9050919050565b610b8481610b69565b8114610b8f57600080fd5b50565b600081359050610ba181610b7b565b92915050565b6000819050919050565b610bba81610ba7565b8114610bc557600080fd5b50565b600081359050610bd781610bb1565b92915050565b60008060408385031215610bf457610bf3610b44565b5b6000610c0285828601610b92565b9250506020610c1385828601610bc8565b9150509250929050565b60008115159050919050565b610c3281610c1d565b82525050565b6000602082019050610c4d6000830184610c29565b92915050565b610c5c81610ba7565b82525050565b6000602082019050610c776000830184610c53565b92915050565b600080600060608486031215610c9657610c95610b44565b5b6000610ca486828701610b92565b9350506020610cb586828701610b92565b9250506040610cc686828701610bc8565b9150509250925092565b600060ff82169050919050565b610ce681610cd0565b82525050565b6000602082019050610d016000830184610cdd565b92915050565b600060208284031215610d1d57610d1c610b44565b5b6000610d2b84828501610b92565b91505092915050565b60008060408385031215610d4b57610d4a610b44565b5b6000610d5985828601610b92565b9250506020610d6a85828601610b92565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610dbb57607f821691505b60208210811415610dcf57610dce610d74565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e0f82610ba7565b9150610e1a83610ba7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e4f57610e4e610dd5565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610eb6602583610a94565b9150610ec182610e5a565b604082019050919050565b60006020820190508181036000830152610ee581610ea9565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f48602483610a94565b9150610f5382610eec565b604082019050919050565b60006020820190508181036000830152610f7781610f3b565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fda602283610a94565b9150610fe582610f7e565b604082019050919050565b6000602082019050818103600083015261100981610fcd565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611046601d83610a94565b915061105182611010565b602082019050919050565b6000602082019050818103600083015261107581611039565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006110d8602583610a94565b91506110e38261107c565b604082019050919050565b60006020820190508181036000830152611107816110cb565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061116a602383610a94565b91506111758261110e565b604082019050919050565b600060208201905081810360008301526111998161115d565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006111fc602683610a94565b9150611207826111a0565b604082019050919050565b6000602082019050818103600083015261122b816111ef565b905091905056fea26469706673582212200c4355b2fe20d0e2470f4bafb95fe9e21dd33b70598af2a54a6046ff5894e8a364736f6c63430008090033';

// const web3Modal = new Web3Modal({
//     network:"rinkeby",
//     chainId:4,
//     cacheProvider: false,
//     disableInjectedProvider:false,
//     theme:"dark",
//     providerOptions
//   });
const providerOptions = {
	binancechainwallet: {
		package: true
	  },
	walletconnect: {
		package: WalletConnectProvider,
		options: {
		  infuraId: "765d4237ce7e4d999f706854d5b66fdc"
		}
	  },
	  coinbasewallet: {
		package: CoinbaseWalletSDK, 
		options: {
		  appName: "Net2Dev NFT Minter", 
		  infuraId: "765d4237ce7e4d999f706854d5b66fdc", 
		  rpc: "", 
		  chainId: 1, 
		  appLogoUrl: null, 
		  darkMode: true 
		}
	  },
};

const web3Modal = new Web3Modal({
  network: "rinkeby",
  theme: "dark",
  cacheProvider: true,
  providerOptions 
});


async function submit(){
  let submittedTokenName  = document.getElementById("tokenNameId").value
  let submittedTokenSymbol = document.getElementById("tokenSymbolId").value
  let submittedTokenDecimal = document.getElementById("decimal").value
  let submittedTokenSupply = document.getElementById("tokenSupplyId").value


  if(!account){
    let provider = await web3Modal.connect();
    var web3 = new Web3(provider);
    await provider.send("eth_requestAccounts");
    let accounts = await web3.eth.getAccounts();
    var account = accounts[0];
  }
    let contract = new web3.eth.Contract(ABI);
    await contract.deploy({data:'0x'+byteCode, arguments:[submittedTokenName, submittedTokenSymbol, submittedTokenDecimal, submittedTokenSupply]})
    .send({from:account}, function(error, transactionHash) {
      if(error){
        console.log(error)
      }
      document.getElementsByClassName("overlay")[0].style.display = "block";
      document.getElementsByClassName("ring")[0].style.display = "block";
      let txn = "https://goerli.etherscan.io/tx/"+transactionHash;
      document.getElementsByClassName("txn-link")[0].innerHTML = txn;
      console.log("Tx Hash: ", txn)
    })
    .on("confirmation", function(){
      return;
    }).then(function(txnFinal){
      if(!txnFinal.options.address){
        console.log(txnFinal.options.address);
        return;
      }
      document.getElementsByClassName("overlay")[0].style.display = "none";
      document.getElementsByClassName("ring")[0].style.display = "none";
      document.getElementsByClassName("form-for-token")[0].reset();
      tokenAddress = txnFinal.options.address
      let finalContractAddress = "https://goerli.etherscan.io/address/"+txnFinal.options.address;
      console.log("Deployed CA Link: ",finalContractAddress)
    })
  
}

async function addToken(){
  try {
    const submittedTokenSymbol = document.getElementById("tokenSymbolId").value;
    const submittedTokenDecimal = document.getElementById("decimal").value;
    const isAdded = await Web3.currentProvider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: submittedTokenSymbol,
          decimals: submittedTokenDecimal,
        },
      },
    });
  } catch (error) {
    console.log(error);
    alert("Can't Add Token due to an error, please add manually!")
  }

}


const handleSubmit = (e) => {
  e.preventDefault();
}

function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-app">Token Generator</h1>
      </header>
      <div className="non-header">
        <div className="intro-container">
        <img src={ eth } alt="eth logo" width="250px" />
          <div className="eth-testnet">Ethereum-Testnet</div>
          <div className="intro">Create your ERC20 Token</div> 
        </div>
        <div className="token-info">
          <form  className='form-for-token' method='post' onSubmit={handleSubmit}>
            <div className="form-details">
              <div className="tokenname-symbol">
                <label htmlFor="tokenNameId">Token Name:</label>
                <input type="text" id="tokenNameId" name="tokenName" /><br/>
                <label htmlFor="tokenSymbolId">Symbol:</label>
                <input type="text" id="tokenSymbolId" name="tokenSymbol" /><br/>
              </div>
              <div className="decimal-tokensupply">
                <label htmlFor="decimal">Decimal:</label>
                <input type="text" id="decimal" placeholder='18' name="decimalForToken" /><br/>
                <label htmlFor="tokenSupplyId">Token Supply:</label>
                <input type="number" id="tokenSupplyId" name="tokenSupply" /><br/>
              </div>
            </div>
          </form>
          <div className="token-info-btn">
            <button className='submit-btn' onClick={submit}>Create Token</button>
            <div className="overlay"></div>
            <div class="ring">Mining!<span className='spanner'></span></div> 
            <div className="txn" id='txnId'>Track The Txn here: </div>
            <i class="fa-solid fa-circle-check fa-10x" id='faCheck'></i>
            <a href="#" target="_blank" className="txn-link" id='txnLinkId'>Hash</a>
            <div className="congratulation">Your token has been minted successfully!</div>
            <button className="etherscan" onClick={addToken}>🪙  Token Etherscan Address </button>
            <button className="metamask" onClick={addToken}>🦊 Add New token to MetaMask</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

