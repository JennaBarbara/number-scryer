import { rollDie } from "./roll-die"


const STORED_CURRENT_DIE = "numberScryer.currentDie"

export function getStoredCurrentDie(): number {
  const rawDie = localStorage.getItem(STORED_CURRENT_DIE)
  if(rawDie && typeof parseInt(rawDie) === 'number' ) {
    return parseInt(rawDie)
  }
  return  rollDie()
}

export function setStoredCurrentDie(die: number ) {
  localStorage.setItem(STORED_CURRENT_DIE, die.toString())
}
