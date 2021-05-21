import { Tuple8 } from "./types"

export const constants = {
  tokenIds: [0, 1, 2, 3, 4, 5, 6, 7] as Tuple8,
  roundResults1: [5, 2, 3, 7, 4, 8, 9, 1],
  roundResults2: [6, 9, 13, 12],
  roundResults3: [16, 15],
  initialBalances: [0, 0, 0, 0, 0, 0, 0, 0] as Tuple8,
  balancesAfterRound1: [5, 2, 3, 7, 4, 8, 9, 1],
  balancesAfterRound2: [6, 2, 3, 9, 4, 13, 12, 1],
  balancesAfterRound3: [6, 2, 3, 16, 4, 15, 12, 1],
  initialBracketWinners: [0, 1, 2, 3, 4, 5, 6, 7] as Tuple8,
  bracketWinnersAfterRound1: [0, 3, 5, 6, 4, 5, 6, 7],
  bracketWinnersAfterRound2: [3, 5, 5, 6, 4, 5, 6, 7],
  bracketWinnersAfterRound3: [3, 5, 5, 6, 4, 5, 6, 7]
}