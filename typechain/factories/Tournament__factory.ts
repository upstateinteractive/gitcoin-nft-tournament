/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Tournament, TournamentInterface } from "../Tournament";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tournamentId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "round",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8[8]",
        name: "bracketWinners",
        type: "uint8[8]",
      },
    ],
    name: "RoundEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tournamentId",
        type: "uint256",
      },
    ],
    name: "TournamentCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tournamentId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "bracketWinner",
        type: "uint8",
      },
    ],
    name: "TournamentEnded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[8]",
        name: "_playerWallets",
        type: "address[8]",
      },
      {
        internalType: "address[8]",
        name: "_tokenAddresses",
        type: "address[8]",
      },
      {
        internalType: "uint256[8]",
        name: "_tokenIds",
        type: "uint256[8]",
      },
    ],
    name: "createTournament",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_playersRoundScores",
        type: "uint256[]",
      },
    ],
    name: "endCurrentRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_playersRoundScores",
        type: "uint256[]",
      },
    ],
    name: "endTournament",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentId",
        type: "uint256",
      },
    ],
    name: "getBracketWinners",
    outputs: [
      {
        internalType: "uint8[8]",
        name: "",
        type: "uint8[8]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentId",
        type: "uint256",
      },
    ],
    name: "getCurrentBalances",
    outputs: [
      {
        internalType: "uint256[8]",
        name: "",
        type: "uint256[8]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentId",
        type: "uint256",
      },
    ],
    name: "getCurrentRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentId",
        type: "uint256",
      },
    ],
    name: "getTokenAddresses",
    outputs: [
      {
        internalType: "address[8]",
        name: "",
        type: "address[8]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentId",
        type: "uint256",
      },
    ],
    name: "getTokenIds",
    outputs: [
      {
        internalType: "uint256[8]",
        name: "",
        type: "uint256[8]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentId",
        type: "uint256",
      },
    ],
    name: "getWallets",
    outputs: [
      {
        internalType: "address[8]",
        name: "",
        type: "address[8]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612abf806100606000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063b49e6fdd11610066578063b49e6fdd14610144578063c3e6fbdf14610160578063c591a49114610190578063dc8fd770146101c0578063fcb63e0c146101f057610093565b8063148b02c5146100985780634f43bd70146100c857806357991d30146100e457806382f8fff214610114575b600080fd5b6100b260048036038101906100ad91906115fa565b61020c565b6040516100bf91906121fe565b60405180910390f35b6100e260048036038101906100dd91906115a8565b61022c565b005b6100fe60048036038101906100f991906115fa565b61050a565b60405161010b919061214a565b60405180910390f35b61012e600480360381019061012991906115fa565b61056b565b60405161013b919061214a565b60405180910390f35b61015e60048036038101906101599190611623565b6105cc565b005b61017a600480360381019061017591906115fa565b610b65565b6040516101879190612166565b60405180910390f35b6101aa60048036038101906101a591906115fa565b610bec565b6040516101b7919061212e565b60405180910390f35b6101da60048036038101906101d591906115fa565b610c83565b6040516101e7919061212e565b60405180910390f35b61020a60048036038101906102059190611623565b610d1a565b005b600060026000838152602001908152602001600020602101549050919050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146102ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b19061219e565b60405180910390fd5b6102c4600161130c565b60006102d06001611322565b90506040518060c00160405280856008806020026040519081016040528092919082600860200280828437600081840152601f19601f8201169050808301925050505050508152602001846008806020026040519081016040528092919082600860200280828437600081840152601f19601f8201169050808301925050505050508152602001836008806020026040519081016040528092919082600860200280828437600081840152601f19601f82011690508083019250505050505081526020016040518061010001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152508152602001604051806101000160405280600060ff168152602001600160ff168152602001600260ff168152602001600360ff168152602001600460ff168152602001600560ff168152602001600660ff168152602001600760ff168152508152602001600381525060026000838152602001908152602001600020600082015181600001906008610469929190611330565b50602082015181600801906008610481929190611330565b506040820151816010019060086104999291906113ad565b506060820151816018019060086104b19291906113ad565b506080820151816020019060086104c99291906113ed565b5060a08201518160210155905050807f113d32d0b7aec15a8c7f50af4cb42f4695e5b95524ed69519ac88d6c1f1f40f660405160405180910390a250505050565b610512611487565b6002600083815260200190815260200160002060100160088060200260405190810160405280929190826008801561055f576020028201915b81548152602001906001019080831161054b575b50505050509050919050565b610573611487565b600260008381526020019081526020016000206018016008806020026040519081016040528092919082600880156105c0576020028201915b8154815260200190600101908083116105ac575b50505050509050919050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461065a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106519061219e565b60405180910390fd5b60016002600085815260200190815260200160002060210154146106b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106aa906121be565b60405180910390fd5b6002600084815260200190815260200160002060210160008154809291906106da906124e3565b9190505550600060026000858152602001908152602001600020602001600060088110610730577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190069054906101000a900460ff1660ff16905060006002600086815260200190815260200160002060200160016008811061079c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190069054906101000a900460ff1660ff169050838360008181106107f1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135600260008781526020019081526020016000206018018360088110610846577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b01600082825461085691906122c6565b9250508190555083836001818110610897577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201356002600087815260200190815260200160002060180182600881106108ec577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160008282546108fc91906122c6565b925050819055508383600181811061093d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201358484600081811061097e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135116109f457600260008681526020019081526020016000206020016001600881106109d9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190069054906101000a900460ff16610a5a565b60026000868152602001908152602001600020602001600060088110610a43577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190069054906101000a900460ff165b60026000878152602001908152602001600020602001600060088110610aa9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190066101000a81548160ff021916908360ff16021790555060026000868152602001908152602001600020602001600060088110610b18577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190069054906101000a900460ff1660ff16857fb8194a270b06732032da7dfda03c70f3be6d4fef19b56310c09393b8126d0c3060405160405180910390a35050505050565b610b6d6114aa565b60026000838152602001908152602001600020602001600880602002604051908101604052809291908260088015610be0576020028201916000905b82829054906101000a900460ff1660ff1681526020019060010190602082600001049283019260010382029150808411610ba95790505b50505050509050919050565b610bf46114cd565b60026000838152602001908152602001600020600801600880602002604051908101604052809291908260088015610c77576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610c2d575b50505050509050919050565b610c8b6114cd565b60026000838152602001908152602001600020600001600880602002604051908101604052809291908260088015610d0e576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610cc4575b50505050509050919050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610da8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9f9061219e565b60405180910390fd5b6001600260008581526020019081526020016000206021015411610e01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df8906121de565b60405180910390fd5b600260008481526020019081526020016000206021016000815480929190610e28906124e3565b9190505550600060026000858152602001908152602001600020602101546002610e52919061236f565b90506000806000805b8481101561129257600260008981526020019081526020016000206020018260088110610eb1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190069054906101000a900460ff1660ff16935060026000898152602001908152602001600020602001600183610eef91906122c6565b60088110610f26577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190069054906101000a900460ff1660ff169250868683818110610f7a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135600260008a81526020019081526020016000206018018560088110610fcf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b016000828254610fdf91906122c6565b925050819055508686600184610ff591906122c6565b81811061102b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135600260008a81526020019081526020016000206018018460088110611080577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b01600082825461109091906122c6565b9250508190555086866001846110a691906122c6565b8181106110dc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002013587878481811061111c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201351161119d576002600089815260200190815260200160002060200160018361114b91906122c6565b60088110611182577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190069054906101000a900460ff16611202565b6002600089815260200190815260200160002060200182600881106111eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190069054906101000a900460ff165b600260008a81526020019081526020016000206020018260088110611250577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190066101000a81548160ff021916908360ff16021790555060028261127d91906122c6565b9150808061128a9061284d565b915050610e5b565b50600160026000898152602001908152602001600020602101546112b691906122c6565b877f012db73d151e1d14953e88035b0ad39bcd186ce6656d5c02c87436f1389b1b4e600260008b81526020019081526020016000206020016040516112fb9190612182565b60405180910390a350505050505050565b6001816000016000828254019250508190555050565b600081600001549050919050565b826008810192821561139c579160200282015b8281111561139b5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611343565b5b5090506113a991906114f0565b5090565b82600881019282156113dc579160200282015b828111156113db5782518255916020019190600101906113c0565b5b5090506113e991906114f0565b5090565b826008601f016020900481019282156114765791602002820160005b8382111561144757835183826101000a81548160ff021916908360ff1602179055509260200192600101602081600001049283019260010302611409565b80156114745782816101000a81549060ff0219169055600101602081600001049283019260010302611447565b505b50905061148391906114f0565b5090565b604051806101000160405280600890602082028036833780820191505090505090565b604051806101000160405280600890602082028036833780820191505090505090565b604051806101000160405280600890602082028036833780820191505090505090565b5b808211156115095760008160009055506001016114f1565b5090565b60008190508260206008028201111561152557600080fd5b92915050565b60008190508260206008028201111561154357600080fd5b92915050565b60008083601f84011261155b57600080fd5b8235905067ffffffffffffffff81111561157457600080fd5b60208301915083602082028301111561158c57600080fd5b9250929050565b6000813590506115a281612a72565b92915050565b600080600061030084860312156115be57600080fd5b60006115cc8682870161150d565b9350506101006115de8682870161150d565b9250506102006115f08682870161152b565b9150509250925092565b60006020828403121561160c57600080fd5b600061161a84828501611593565b91505092915050565b60008060006040848603121561163857600080fd5b600061164686828701611593565b935050602084013567ffffffffffffffff81111561166357600080fd5b61166f86828701611549565b92509250509250925092565b600061168783836116c3565b60208301905092915050565b600061169f8383612101565b60208301905092915050565b60006116b7838361211f565b60208301905092915050565b6116cc8161249a565b82525050565b6116db81612241565b6116e58184612294565b92506116f082612219565b8060005b83811015611721578151611708878261167b565b96506117138361226d565b9250506001810190506116f4565b505050505050565b6117328161224c565b61173c818461229f565b925061174782612223565b8060005b8381101561177857815161175f8782611693565b965061176a8361227a565b92505060018101905061174b565b505050505050565b61178981612257565b61179381846122aa565b925061179e8261222d565b8060005b838110156117cf5781516117b687826116ab565b96506117c183612287565b9250506001810190506117a2565b505050505050565b6117e081612262565b6117ea81846122aa565b9250826117f683612237565b60008015611b22575b83600160200382011015611b215781546118218761181c8361250d565b61211f565b602087019650611839876118348361262b565b61211f565b6020870196506118518761184c83612749565b61211f565b6020870196506118698761186483612797565b61211f565b6020870196506118818761187c836127b1565b61211f565b60208701965061189987611894836127cb565b61211f565b6020870196506118b1876118ac836127e5565b61211f565b6020870196506118c9876118c4836127ff565b61211f565b6020870196506118e1876118dc83612819565b61211f565b6020870196506118f9876118f483612833565b61211f565b6020870196506119118761190c83612527565b61211f565b6020870196506119298761192483612541565b61211f565b6020870196506119418761193c8361255b565b61211f565b6020870196506119598761195483612575565b61211f565b6020870196506119718761196c8361258f565b61211f565b60208701965061198987611984836125a9565b61211f565b6020870196506119a18761199c836125c3565b61211f565b6020870196506119b9876119b4836125dd565b61211f565b6020870196506119d1876119cc836125f7565b61211f565b6020870196506119e9876119e483612611565b61211f565b602087019650611a01876119fc83612645565b61211f565b602087019650611a1987611a148361265f565b61211f565b602087019650611a3187611a2c83612679565b61211f565b602087019650611a4987611a4483612693565b61211f565b602087019650611a6187611a5c836126ad565b61211f565b602087019650611a7987611a74836126c7565b61211f565b602087019650611a9187611a8c836126e1565b61211f565b602087019650611aa987611aa4836126fb565b61211f565b602087019650611ac187611abc83612715565b61211f565b602087019650611ad987611ad48361272f565b61211f565b602087019650611af187611aec83612763565b61211f565b602087019650611b0987611b048361277d565b61211f565b602087019650600183019250506020810190506117ff565b5b600115611fed578154600115611b5157611b4487611b3f8361250d565b61211f565b6020870196506001820191505b600115611b7757611b6a87611b658361262b565b61211f565b6020870196506001820191505b600115611b9d57611b9087611b8b83612749565b61211f565b6020870196506001820191505b600115611bc357611bb687611bb183612797565b61211f565b6020870196506001820191505b600115611be957611bdc87611bd7836127b1565b61211f565b6020870196506001820191505b600115611c0f57611c0287611bfd836127cb565b61211f565b6020870196506001820191505b600115611c3557611c2887611c23836127e5565b61211f565b6020870196506001820191505b600115611c5b57611c4e87611c49836127ff565b61211f565b6020870196506001820191505b600015611c8157611c7487611c6f83612819565b61211f565b6020870196506001820191505b600015611ca757611c9a87611c9583612833565b61211f565b6020870196506001820191505b600015611ccd57611cc087611cbb83612527565b61211f565b6020870196506001820191505b600015611cf357611ce687611ce183612541565b61211f565b6020870196506001820191505b600015611d1957611d0c87611d078361255b565b61211f565b6020870196506001820191505b600015611d3f57611d3287611d2d83612575565b61211f565b6020870196506001820191505b600015611d6557611d5887611d538361258f565b61211f565b6020870196506001820191505b600015611d8b57611d7e87611d79836125a9565b61211f565b6020870196506001820191505b600015611db157611da487611d9f836125c3565b61211f565b6020870196506001820191505b600015611dd757611dca87611dc5836125dd565b61211f565b6020870196506001820191505b600015611dfd57611df087611deb836125f7565b61211f565b6020870196506001820191505b600015611e2357611e1687611e1183612611565b61211f565b6020870196506001820191505b600015611e4957611e3c87611e3783612645565b61211f565b6020870196506001820191505b600015611e6f57611e6287611e5d8361265f565b61211f565b6020870196506001820191505b600015611e9557611e8887611e8383612679565b61211f565b6020870196506001820191505b600015611ebb57611eae87611ea983612693565b61211f565b6020870196506001820191505b600015611ee157611ed487611ecf836126ad565b61211f565b6020870196506001820191505b600015611f0757611efa87611ef5836126c7565b61211f565b6020870196506001820191505b600015611f2d57611f2087611f1b836126e1565b61211f565b6020870196506001820191505b600015611f5357611f4687611f41836126fb565b61211f565b6020870196506001820191505b600015611f7957611f6c87611f6783612715565b61211f565b6020870196506001820191505b600015611f9f57611f9287611f8d8361272f565b61211f565b6020870196506001820191505b600015611fc557611fb887611fb383612763565b61211f565b6020870196506001820191505b600015611feb57611fde87611fd98361277d565b61211f565b6020870196506001820191505b505b505050505050565b60006120026017836122b5565b91507f43616c6c6572206973206e6f7420746865206f776e65720000000000000000006000830152602082019050919050565b60006120426024836122b5565b91507f546f75726e616d656e74206d75737420626520696e20746865206c617374207260008301527f6f756e64000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006120a8602d836122b5565b91507f546f75726e616d656e74206d757374206e6f742062652072656163686564207460008301527f6865206c61737420726f756e64000000000000000000000000000000000000006020830152604082019050919050565b61210a816124cc565b82525050565b612119816124cc565b82525050565b612128816124d6565b82525050565b60006101008201905061214460008301846116d2565b92915050565b6000610100820190506121606000830184611729565b92915050565b60006101008201905061217c6000830184611780565b92915050565b60006101008201905061219860008301846117d7565b92915050565b600060208201905081810360008301526121b781611ff5565b9050919050565b600060208201905081810360008301526121d781612035565b9050919050565b600060208201905081810360008301526121f78161209b565b9050919050565b60006020820190506122136000830184612110565b92915050565b6000819050919050565b6000819050919050565b6000819050919050565b6000819050919050565b600060089050919050565b600060089050919050565b600060089050919050565b600060089050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600081905092915050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b60006122d1826124cc565b91506122dc836124cc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561231157612310612896565b5b828201905092915050565b6000808291508390505b60018511156123665780860481111561234257612341612896565b5b60018516156123515780820291505b808102905061235f8561297b565b9450612326565b94509492505050565b600061237a826124cc565b9150612385836124cc565b92506123b27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846123ba565b905092915050565b6000826123ca5760019050612486565b816123d85760009050612486565b81600181146123ee57600281146123f857612427565b6001915050612486565b60ff84111561240a57612409612896565b5b8360020a91508482111561242157612420612896565b5b50612486565b5060208310610133831016604e8410600b841016171561245c5782820a90508381111561245757612456612896565b5b612486565b612469848484600161231c565b925090508184048111156124805761247f612896565b5b81810290505b9392505050565b600060ff82169050919050565b60006124a5826124ac565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006124ee826124cc565b9150600082141561250257612501612896565b5b600182039050919050565b600061252061251b836128c5565b61248d565b9050919050565b600061253a61253583612a3e565b61248d565b9050919050565b600061255461254f83612a4b565b61248d565b9050919050565b600061256e61256983612a65565b61248d565b9050919050565b6000612588612583836128d2565b61248d565b9050919050565b60006125a261259d836128df565b61248d565b9050919050565b60006125bc6125b7836128ec565b61248d565b9050919050565b60006125d66125d1836128f9565b61248d565b9050919050565b60006125f06125eb83612906565b61248d565b9050919050565b600061260a61260583612913565b61248d565b9050919050565b600061262461261f83612920565b61248d565b9050919050565b600061263e61263983612a58565b61248d565b9050919050565b60006126586126538361292d565b61248d565b9050919050565b600061267261266d8361293a565b61248d565b9050919050565b600061268c61268783612954565b61248d565b9050919050565b60006126a66126a183612961565b61248d565b9050919050565b60006126c06126bb8361296e565b61248d565b9050919050565b60006126da6126d583612988565b61248d565b9050919050565b60006126f46126ef83612995565b61248d565b9050919050565b600061270e612709836129a2565b61248d565b9050919050565b6000612728612723836129af565b61248d565b9050919050565b600061274261273d836129bc565b61248d565b9050919050565b600061275c61275783612947565b61248d565b9050919050565b6000612776612771836129c9565b61248d565b9050919050565b600061279061278b836129d6565b61248d565b9050919050565b60006127aa6127a5836129e3565b61248d565b9050919050565b60006127c46127bf836129f0565b61248d565b9050919050565b60006127de6127d9836129fd565b61248d565b9050919050565b60006127f86127f383612a0a565b61248d565b9050919050565b600061281261280d83612a17565b61248d565b9050919050565b600061282c61282783612a24565b61248d565b9050919050565b600061284661284183612a31565b61248d565b9050919050565b6000612858826124cc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561288b5761288a612896565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160001c9050919050565b60008160681c9050919050565b60008160701c9050919050565b60008160781c9050919050565b60008160801c9050919050565b60008160881c9050919050565b60008160901c9050919050565b60008160981c9050919050565b60008160a01c9050919050565b60008160a81c9050919050565b60008160101c9050919050565b60008160b01c9050919050565b60008160b81c9050919050565b60008160c01c9050919050565b60008160011c9050919050565b60008160c81c9050919050565b60008160d01c9050919050565b60008160d81c9050919050565b60008160e01c9050919050565b60008160e81c9050919050565b60008160f01c9050919050565b60008160f81c9050919050565b60008160181c9050919050565b60008160201c9050919050565b60008160281c9050919050565b60008160301c9050919050565b60008160381c9050919050565b60008160401c9050919050565b60008160481c9050919050565b60008160501c9050919050565b60008160581c9050919050565b60008160081c9050919050565b60008160601c9050919050565b612a7b816124cc565b8114612a8657600080fd5b5056fea26469706673582212208b55814324534017c9306e03cb2d040b6349b1269373aa59ab278f8f4527105e64736f6c63430008000033";

export class Tournament__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Tournament> {
    return super.deploy(overrides || {}) as Promise<Tournament>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Tournament {
    return super.attach(address) as Tournament;
  }
  connect(signer: Signer): Tournament__factory {
    return super.connect(signer) as Tournament__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TournamentInterface {
    return new utils.Interface(_abi) as TournamentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Tournament {
    return new Contract(address, _abi, signerOrProvider) as Tournament;
  }
}
