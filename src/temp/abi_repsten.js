// ropsten abi
export const repston_hstAbi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]

export const repston_hstBytecode = "0x608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad57806395d89b411161007157806395d89b4114610245578063a457c2d71461024d578063a9059cbb14610260578063dd62ed3e14610273578063f2fde38b146102ac5761012c565b806370a08231146101f4578063715018a61461020757806379cc67901461020f5780638456cb59146102225780638da5cb5b1461022a5761012c565b806339509351116100f457806339509351146101a65780633f4ba83a146101b957806340c10f19146101c357806342966c68146101d65780635c975abb146101e95761012c565b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017257806323b872dd14610184578063313ce56714610197575b600080fd5b6101396102bf565b6040516101469190610f74565b60405180910390f35b61016261015d366004610f33565b610351565b6040519015158152602001610146565b6003545b604051908152602001610146565b610162610192366004610ef8565b610367565b604051600c8152602001610146565b6101626101b4366004610f33565b61041d565b6101c1610454565b005b6101c16101d1366004610f33565b610488565b6101c16101e4366004610f5c565b6104c0565b60065460ff16610162565b610176610202366004610ea5565b6104cc565b6101c16104eb565b6101c161021d366004610f33565b61055f565b6101c16105e7565b6000546040516001600160a01b039091168152602001610146565b610139610619565b61016261025b366004610f33565b610628565b61016261026e366004610f33565b6106c3565b610176610281366004610ec6565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6101c16102ba366004610ea5565b6106d0565b6060600480546102ce9061102b565b80601f01602080910402602001604051908101604052809291908181526020018280546102fa9061102b565b80156103475780601f1061031c57610100808354040283529160200191610347565b820191906000526020600020905b81548152906001019060200180831161032a57829003601f168201915b5050505050905090565b600061035e3384846107ba565b50600192915050565b60006103748484846108df565b6001600160a01b0384166000908152600260209081526040808320338452909152902054828110156103fe5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b610412853361040d8685611014565b6107ba565b506001949350505050565b3360008181526002602090815260408083206001600160a01b0387168452909152812054909161035e91859061040d908690610ffc565b6000546001600160a01b0316331461047e5760405162461bcd60e51b81526004016103f590610fc7565b610486610ac2565b565b6000546001600160a01b031633146104b25760405162461bcd60e51b81526004016103f590610fc7565b6104bc8282610b55565b5050565b6104c981610c40565b50565b6001600160a01b0381166000908152600160205260409020545b919050565b6000546001600160a01b031633146105155760405162461bcd60e51b81526004016103f590610fc7565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b600061056b8333610281565b9050818110156105c95760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b60648201526084016103f5565b6105d8833361040d8585611014565b6105e28383610c46565b505050565b6000546001600160a01b031633146106115760405162461bcd60e51b81526004016103f590610fc7565b610486610da1565b6060600580546102ce9061102b565b3360009081526002602090815260408083206001600160a01b0386168452909152812054828110156106aa5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103f5565b6106b9338561040d8685611014565b5060019392505050565b600061035e3384846108df565b6000546001600160a01b031633146106fa5760405162461bcd60e51b81526004016103f590610fc7565b6001600160a01b03811661075f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103f5565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03831661081c5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103f5565b6001600160a01b03821661087d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103f5565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166109435760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103f5565b6001600160a01b0382166109a55760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103f5565b6109b0838383610e1c565b6001600160a01b03831660009081526001602052604090205481811015610a285760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103f5565b610a328282611014565b6001600160a01b038086166000908152600160205260408082209390935590851681529081208054849290610a68908490610ffc565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ab491815260200190565b60405180910390a350505050565b60065460ff16610b0b5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016103f5565b6006805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610bab5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103f5565b610bb760008383610e1c565b8060036000828254610bc99190610ffc565b90915550506001600160a01b03821660009081526001602052604081208054839290610bf6908490610ffc565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6104c933825b6001600160a01b038216610ca65760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103f5565b610cb282600083610e1c565b6001600160a01b03821660009081526001602052604090205481811015610d265760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103f5565b610d308282611014565b6001600160a01b03841660009081526001602052604081209190915560038054849290610d5e908490611014565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016108d2565b60065460ff1615610de75760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016103f5565b6006805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610b383390565b6105e2838383610e2e60065460ff1690565b156105e25760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b60648201526084016103f5565b80356001600160a01b03811681146104e657600080fd5b600060208284031215610eb6578081fd5b610ebf82610e8e565b9392505050565b60008060408385031215610ed8578081fd5b610ee183610e8e565b9150610eef60208401610e8e565b90509250929050565b600080600060608486031215610f0c578081fd5b610f1584610e8e565b9250610f2360208501610e8e565b9150604084013590509250925092565b60008060408385031215610f45578182fd5b610f4e83610e8e565b946020939093013593505050565b600060208284031215610f6d578081fd5b5035919050565b6000602080835283518082850152825b81811015610fa057858101830151858201604001528201610f84565b81811115610fb15783604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000821982111561100f5761100f611066565b500190565b60008282101561102657611026611066565b500390565b600181811c9082168061103f57607f821691505b6020821081141561106057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212204f135398a0a4a0c0b95865e12ea6c66f3ef8fc02c0b05200ef8db0d6485e898864736f6c63430008030033"



