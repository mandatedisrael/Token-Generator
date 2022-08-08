// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-app">Token Generator</h1>
      </header>
      <div className="non-header">
        <div className="intro">No coding skills? No problem, this is a free token generator in 5mins!</div>
        <div className="token-info">Provide the following informations</div>
        <form action="">
          <label htmlFor="tokenNameId">Token Name:</label>
          <input type="text" id="tokenNameId" name="tokenName" /><br/>
          <label htmlFor="tokenSymbolId">Symbol:</label>
          <input type="text" id="tokenSymbolId" name="tokenSymbol"/><br/>
          <label htmlFor="decimal">Decimal:</label>
          <input type="text" id="decimal" placeholder='18' name="decimalForToken"/><br/>
          <label htmlFor="tokenSupplyId">Token Supply:</label>
          <input type="text" id="tokenSupplyId" name="tokenSupply"/><br/>
          <input type="submit" value="Create Token" />
        </form>
      </div>
    </div>
  );
}

export default App;
