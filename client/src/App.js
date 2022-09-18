import eth from './eth.svg';
import './App.css';
import Web3 from "web3";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import WalletConnectProvider from "@walletconnect/web3-provider";
import {ethers} from "ethers";
import { useState } from 'react';



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

const ABI = null;
const account = null;
const byteCode = null;
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
  var submittedTokenName  = document.getElementById("tokenNameId").value
  var submittedTokenSymbol = document.getElementById("").value
  var submittedTokenDecimal = document.getElementById("").value
  if(!account){
    var provider = await web3Modal.connect();
    var web3 = new Web3(provider);
    await provider.send("eth_requestAccounts");
    var accounts = await web3.eth.getAccounts();
    var account = accounts[0];
  }
    var contract = new web3.eth.Contract(ABI);
    contract.deploy({data:byteCode, arguments:[tokenName, tokenSymbol, decimalForToken, tokenSupply]})
    .send({from:account}, function(error, transactionHash) {
      if(error){alert("ERROR",error)}
      else{
        console.log(transactionHash)
      }
    })

  let formDetails  = document.getElementsByClassName('form-for-token');
  formDetails[0].submit();
  
}
function App() {
  const [tokenName, setTokenName] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [decimal, setTokenDecimal] = useState("")
  const [supply, setTokenSupply] = useState("")

  function handleSubmit(e){
    e.preventDefault()
  }

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
          <form action="../../create-token" className='form-for-token' method='post' onSubmit={handleSubmit} >
            <div className="form-details">
              <div className="tokenname-symbol">
                <label htmlFor="tokenNameId">Token Name:</label>
                <input type="text" id="tokenNameId" name="tokenName" value={tokenName} onChange={ (e) => setTokenName(e.target.value)} required/><br/>
                <label htmlFor="tokenSymbolId">Symbol:</label>
                <input type="text" id="tokenSymbolId" name="tokenSymbol" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} /><br/>
              </div>
              <div className="decimal-tokensupply">
                <label htmlFor="decimal">Decimal:</label>
                <input type="text" id="decimal" placeholder='18' name="decimalForToken"  value={decimal} onChange= {(e) => setTokenDecimal(e.target.value)}/><br/>
                <label htmlFor="tokenSupplyId">Token Supply:</label>
                <input type="number" id="tokenSupplyId" name="tokenSupply" value={supply} onChange={(e) => setTokenSupply(e.target.value)} /><br/>
              </div>
            </div>
          </form>
          <div className="token-info-btn">
            <button className='submit-btn' onClick={submit}>Create Token</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

