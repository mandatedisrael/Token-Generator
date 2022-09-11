const path = require('path')
const fs = require('fs')
const solc = require('solc')

const contractPath = path.resolve(__dirname, 'contracts', 'tokenContract.sol')
const source = fs.readFileSync(contractPath, 'utf-8')

var input = {
    language: 'Solidity',
    sources: {
      'tokenContract.sol': {
        content: source
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };
  
  console.log(JSON.parse(solc.compile(JSON.stringify(input))))