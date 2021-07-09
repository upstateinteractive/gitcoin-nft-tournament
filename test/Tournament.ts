import { ethers } from "hardhat"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address"
import { expect } from "chai"

import { Tuple8 } from "./helpers/types"
import { constants as C } from "./helpers/constants"

import { Tournament } from "../typechain/Tournament"
import { ERC721Mock } from "../typechain/ERC721Mock"

let notOwner: SignerWithAddress
let owner: SignerWithAddress
let players: SignerWithAddress[]
let playerAddresses: Tuple8
let tokenAddress: Tuple8
let TournamentToken: ERC721Mock
let tournament: Tournament

describe("Tournament", function () {

  before(async function () {
    const signers = await ethers.getSigners()
    const ERC721 = await ethers.getContractFactory("ERC721Mock")

    notOwner = signers[0]
    owner = signers[1]
    players = signers.slice(2, 10) // Get 8 addresses
    playerAddresses = players.map(player => player.address) as Tuple8

    TournamentToken = await ERC721.deploy("TournamentToken", "TTK") as ERC721Mock
    tokenAddress = new Array<string>(8).fill(TournamentToken.address) as Tuple8

    // Mint an NFT for each player
    C.tokenIds.forEach(async (id, i) => await TournamentToken.safeMint(playerAddresses[i], id))
  })

  beforeEach(async function () {
    const Tournament = await ethers.getContractFactory("Tournament")
    tournament = await Tournament.connect(owner).deploy() as Tournament

    await tournament.deployed()
  })

  describe("createTournament", function () {

    it("should revert if not called by the owner", async function () {
      await expect(
        tournament.connect(notOwner).createTournament(playerAddresses, tokenAddress, C.tokenIds)
      )
        .to.be.revertedWith("Caller is not the owner")
    })
    it("should emit TournamentCreated event", async function () {
      await expect(
        tournament.connect(owner).createTournament(playerAddresses, tokenAddress, C.tokenIds)
      )
        .to.emit(tournament, "TournamentCreated").withArgs(1)
    })
    it("should correctly set wallets", async () => {
      await tournament.connect(owner).createTournament(playerAddresses, tokenAddress, C.tokenIds)
      expect(await tournament.getWallets(1)).to.eql(playerAddresses)
    })
    it("should correctly set token addresses", async () => {
      await tournament.connect(owner).createTournament(playerAddresses, tokenAddress, C.tokenIds)
      expect(await tournament.getTokenAddresses(1)).to.eql(tokenAddress)
    })
    it("should correctly set token ids", async () => {
      await tournament.connect(owner).createTournament(playerAddresses, tokenAddress, C.tokenIds)
      const gottenTokenIds = await tournament.getTokenIds(1)

      gottenTokenIds.forEach((tokenId, i) => expect(tokenId).to.be.equal(ethers.BigNumber.from(C.tokenIds[i])))
    })
    it("should correctly set balances", async () => {
      await tournament.connect(owner).createTournament(playerAddresses, tokenAddress, C.tokenIds)
      const gottenBalances = await tournament.getCurrentBalances(1)

      gottenBalances.forEach((balance, i) => expect(balance).to.be.equal(ethers.BigNumber.from(C.initialBalances[i])))
    })
    it("should correctly set bracket winners", async () => {
      await tournament.connect(owner).createTournament(playerAddresses, tokenAddress, C.tokenIds)
      expect(await tournament.getBracketWinners(1)).to.eql(C.initialBracketWinners)
    })
    it("should correctly set current round", async () => {
      await tournament.connect(owner).createTournament(playerAddresses, tokenAddress, C.tokenIds)
      expect(await tournament.getCurrentRound(1)).to.be.equal(3)
    })
  })

  describe("endCurrentRound", function () {

    beforeEach(async function () {
      await tournament.connect(owner).createTournament(playerAddresses, tokenAddress, C.tokenIds)
    })

    it("should revert if not called by the owner", async function () {
      await expect(
        tournament.connect(notOwner).endCurrentRound(1, C.playersRoundScores1)
      )
        .to.be.revertedWith("Caller is not the owner")
    })
    it("should revert if the tournament has not started", async function () {
      await expect(
        tournament.connect(owner).endCurrentRound(2, C.playersRoundScores1)
      )
        .to.be.revertedWith("Tournament must not be reached the last round")
    })
    it("should revert if the tournament has reached the last round", async function () {
      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores1)
      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores2)

      await expect(
        tournament.connect(owner).endCurrentRound(1, C.playersRoundScores3)
      )
        .to.be.revertedWith("Tournament must not be reached the last round")
    })
    it("should emit RoundEnded event", async function () {
      await expect(
        tournament.connect(owner).endCurrentRound(1, C.playersRoundScores1)
      )
        .to.emit(tournament, "RoundEnded").withArgs(1, 3, C.bracketWinnersAfterRound1, C.playersRoundScores1)

      await expect(
        tournament.connect(owner).endCurrentRound(1, C.playersRoundScores2)
      )
        .to.emit(tournament, "RoundEnded").withArgs(1, 2, C.bracketWinnersAfterRound2, C.playersRoundScores2)
    })
    it("should correctly update balances", async () => {
      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores1)
      const balancesAfterRound1 = await tournament.getCurrentBalances(1)

      balancesAfterRound1.forEach((balance, i) => expect(balance).to.be.equal(ethers.BigNumber.from(C.balancesAfterRound1[i])))

      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores2)
      const balancesAfterRound2 = await tournament.getCurrentBalances(1)

      balancesAfterRound2.forEach((balance, i) => expect(balance).to.be.equal(ethers.BigNumber.from(C.balancesAfterRound2[i])))
    })
    it("should correctly update bracket winners", async () => {
      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores1)
      const bracketWinnersAfterRound1 = await tournament.getBracketWinners(1)

      bracketWinnersAfterRound1.forEach((winner, i) => expect(winner).to.be.equal(ethers.BigNumber.from(C.bracketWinnersAfterRound1[i])))

      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores2)
      const bracketWinnersAfterRound2 = await tournament.getBracketWinners(1)

      bracketWinnersAfterRound2.forEach((winner, i) => expect(winner).to.be.equal(ethers.BigNumber.from(C.bracketWinnersAfterRound2[i])))
    })
    it("should correctly update current round", async () => {
      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores1)
      expect(await tournament.getCurrentRound(1)).to.be.equal(2)

      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores2)
      expect(await tournament.getCurrentRound(1)).to.be.equal(1)
    })
  })

  describe("endTournament", async function () {

    beforeEach(async function () {
      await tournament.connect(owner).createTournament(playerAddresses, tokenAddress, C.tokenIds)
    })

    it("should revert if not called by the owner", async function () {
      await expect(
        tournament.connect(notOwner).endTournament(1, C.playersRoundScores1)
      )
        .to.be.revertedWith("Caller is not the owner")
    })
    it("should revert if the tournament has not started", async function () {
      await expect(
        tournament.connect(owner).endTournament(2, C.playersRoundScores1)
      )
        .to.be.revertedWith("Tournament must be in the last round")
    })
    it("should revert if the tournament is not in the last round", async function () {
      await expect(
        tournament.connect(owner).endTournament(1, C.playersRoundScores3)
      )
        .to.be.revertedWith("Tournament must be in the last round")
    })
    it("should emit TournamentEnded event", async function () {
      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores1)
      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores2)
      await expect(
        tournament.connect(owner).endTournament(1, C.playersRoundScores3)
      )
        .to.emit(tournament, "TournamentEnded").withArgs(1, C.bracketWinnersAfterRound3[0], C.playersRoundScores3)
    })
    it("should correctly update balances", async () => {
      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores1)
      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores2)
      await tournament.connect(owner).endTournament(1, C.playersRoundScores3)
      const balancesAfterRound3 = await tournament.getCurrentBalances(1)

      balancesAfterRound3.forEach((balance, i) => expect(balance).to.be.equal(ethers.BigNumber.from(C.balancesAfterRound3[i])))
    })
    it("should correctly update bracket winners", async () => {
      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores1)
      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores2)
      await tournament.connect(owner).endTournament(1, C.playersRoundScores3)
      const bracketWinnersAfterRound3 = await tournament.getBracketWinners(1)

      bracketWinnersAfterRound3.forEach((winner, i) => expect(winner).to.be.equal(ethers.BigNumber.from(C.bracketWinnersAfterRound3[i])))
    })
    it("should correctly update current round", async () => {
      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores1)
      await tournament.connect(owner).endCurrentRound(1, C.playersRoundScores2)
      await tournament.connect(owner).endTournament(1, C.playersRoundScores3)

      expect(await tournament.getCurrentRound(1)).to.be.equal(0)
    })
  })
})