import type { SquareStatus } from "../utils/square-status"
import Button from "./button"
import { useState } from "react"

interface ShareButtonProps {
   score: number
   squareStasuses: Array<Array<SquareStatus>> 
}
export default function ShareButton({score, squareStasuses}:ShareButtonProps) {

    const [boardStateText] = useState(generateBoardStateText(score, squareStasuses))
        const [copyStatus, setCopyStatus] = useState('');

    const copyBoardState = async () => {
        try {
          await navigator.clipboard.writeText(boardStateText);
          setCopyStatus('Copied!');
          setTimeout(() => setCopyStatus(''), 2000); // Clear status after 2 seconds
        } catch (err) {
          setCopyStatus('Failed to copy.');
          console.error('Failed to copy text: ', err);
          setTimeout(() => setCopyStatus(''), 2000); // Clear status after 2 seconds
        }
      };

    return ( 
        <div>
            <Button size="sm" onClick={() => copyBoardState()}>Share Score</Button>
            {copyStatus && <p>{copyStatus}</p>}
        </div>
    )

}

function generateBoardStateText(   score: number, squareStasuses: Array<Array<SquareStatus>> ):string{
    return `You scored a ${score} in Number Pyre \n \n${generateEmojiBoard(squareStasuses)}`
}

function generateEmojiBoard( squareStasuses: Array<Array<SquareStatus>> ) : string {
    let grid = ''
    squareStasuses.forEach((squareStasusRow) =>{
        squareStasusRow.forEach((squareStasus)=> {
            grid = squareStasus.selectable ? 
                grid + '⬜' : 
            squareStasus.scored ? 
                grid + '🟥' :
            squareStasus.number && squareStasus.number === 1 ?
                grid + '1️⃣'  :
            squareStasus.number && squareStasus.number === 2 ?
                grid + '2️⃣' : 
            squareStasus.number && squareStasus.number === 3 ?
                grid + '3️⃣' : 
            squareStasus.number && squareStasus.number === 4 ?
                grid + '4️⃣' : 
            squareStasus.number && squareStasus.number === 5 ?
                grid + '5️⃣' : 
            squareStasus.number && squareStasus.number === 6 ?
            grid + '6️⃣' : grid + '⬛';
        })
        grid = grid + '\n'
    })
    return grid
}