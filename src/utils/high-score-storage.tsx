

const STORED_HIGH_SCORE = "numberScryer.highScore"

export function getStoredHighScore(): number {
  const rawHighScore = localStorage.getItem(STORED_HIGH_SCORE)
  if(rawHighScore && typeof parseInt(rawHighScore) === 'number' ) {
    return parseInt(rawHighScore)
  }
  return  0

}

export function setStoredHighScore(highScore: number ) {
  localStorage.setItem(STORED_HIGH_SCORE, highScore.toString())
}
