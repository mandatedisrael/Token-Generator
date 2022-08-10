// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-app">Token Generator</h1>
      </header>
      <div className="non-header">
        <div className="intro-container">
          <div className="logo">x</div>
          <div className="intro">Generate free token in 5mins!</div> 
        </div>
        <div className="token-info">
          <form action="">
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
              <input type="text" id="tokenSupplyId" name="tokenSupply"/><br/>
            </div>
            <div className="submit">
              <input type="submit" value="Create Token" />  
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
