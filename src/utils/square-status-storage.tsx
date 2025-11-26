
import type { SquareStatus } from "./square-status"

const STORED_SQUARE_STATUSES = "numberScryer.squareStasuses"


export function getStoredSquareStatus(): Array<Array<SquareStatus>> | undefined {
  const rawStoredStatus = localStorage.getItem(STORED_SQUARE_STATUSES)
  if(!rawStoredStatus) {
    return undefined
  }
  const storedStatus = JSON.parse(rawStoredStatus)
  return storedStatus
}

export function setStoredSquareStatuses(squareStatuses: Array<Array<SquareStatus>> ) {
  localStorage.setItem(STORED_SQUARE_STATUSES, JSON.stringify(squareStatuses))
}
