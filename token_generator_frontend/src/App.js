// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-app">Token Generator</h1>
      </header>
      <div className="intro">No coding skills? No problem, this is a free token generator in 5mins!</div>
      <div className="token-info">Provide the following informations</div>
      <form action="">
        <label htmlFor="">Token Name:</label>
        <input type="text" className="tokenName" />
        <label htmlFor="">Symbol:</label>
        <input type="text" className="tokenSymbol" />
        <label htmlFor="">Decimal:</label>
        <input type="text" className="totalSupply" placeholder='18'/>
        <label htmlFor="">Token Supply:</label>
        <input type="text" className="tokenSupply" />
        <input type="submit" value="Create Token" />
      </form>
    </div>
  );
}

export default App;
