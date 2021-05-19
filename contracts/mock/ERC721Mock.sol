// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/**
 * @title ERC721Mock
 * @dev This mock just provides a public safeMint function for testing purposes
 */
contract ERC721Mock is ERC721 {
    constructor (string memory name, string memory symbol) ERC721(name, symbol) { }

    function safeMint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }
}