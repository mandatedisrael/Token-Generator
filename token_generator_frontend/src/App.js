import eth from './eth.svg';
import './App.css';
import Web3 from "web3";
import Web3Modal from "web3modal";

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Dami token Maker",
      infuraId: "602119d1f94b4106b34ff5a701e22bce",
      chainId: 5,
      darkMode:true

    }
  },

  walletconnect:{
    package: WalletConnectProvider,
    options:{
      infuraId:"602119d1f94b4106b34ff5a701e22bce"
    }
  },

  binancechainwallet: {
    package: true
  },

};

const web3Modal = new Web3Modal({
    network:"goerli",
    cacheProvider: true,
    theme:dark,
    providerOptions
  })
const provider = await web3Modal.connect();
const web3 = new Web3(provider);


function App() {
  const connectedWallet = 0; //variable to toggle 'connect wallet' visibility
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-app">Token Generator</h1>
        {!connectedWallet && <button className="connectWallet">Connect Wallet</button>}
      </header>
      <div className="non-header">
        <div className="intro-container">
          {/* <svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1920 1920' enable-background='new 0 0 1920 1920' xmlpace='preserve'><g><polygon fill='#8A92B2' points='959.8,80.7 420.1,976.3 959.8,731 '/><polygon fill='#62688F' points='959.8,731 420.1,976.3 959.8,1295.4 '/><polygon fill='#62688F' points='1499.6,976.3 959.8,80.7 959.8,731 '/><polygon fill='#454A75' points='959.8,1295.4 1499.6,976.3 959.8,731 '/><polygon fill='#8A92B2' points='420.1,1078.7 959.8,1839.3 959.8,1397.6 '/><polygon fill='#62688F' points='959.8,1397.6 959.8,1839.3 1499.9,1078.7 '/></g></svg> */}
          <img src={ eth } alt="eth logo" width="250px" />
          <div className="eth-testnet">Ethereum-Testnet</div>
          <div className="intro">Create your ERC20 Token</div> 
        </div>
        <div className="token-info">
          <form action="">
            <div className="form-details">
              <div className="tokenname-symbol">
                <label htmlFor="tokenNameId">Token Name:</label>
                <input type="text" id="tokenNameId" name="tokenName" /><br/>
                <label htmlFor="tokenSymbolId">Symbol:</label>
                <input type="text" id="tokenSymbolId" name="tokenSymbol"/><br/>
              </div>
              <div className="decimal-tokensupply">
                <label htmlFor="decimal">Decimal:</label>
                <input type="text" id="decimal" placeholder='18' name="decimalForToken"/><br/>
                <label htmlFor="tokenSupplyId">Token Supply:</label>
                <input type="number" id="tokenSupplyId" name="tokenSupply"/><br/>
              </div>
            </div>
            <input type="submit" value="Create Token" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
