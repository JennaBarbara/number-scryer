import { useState, useEffect, useCallback } from 'react';
import { getStoredCurrentDie, setStoredCurrentDie } from './current-die-storage';
import { getStoredUpcomingDice, setStoredUpcomingDice } from './upcoming-dice-storage';
import { rollDie } from './roll-die';

export function useDice(): [number,Array<number>, ()=>void, ()=>void ] {
     const [currentDie, setCurrentDie] = useState<number>(getStoredCurrentDie())
     const [upcomingDice, setUpcomingDice] = useState<Array<number>>(getStoredUpcomingDice())


    useEffect(()=>{
        setStoredCurrentDie(currentDie)
    }, [currentDie])


    useEffect(()=>{
        setStoredUpcomingDice(upcomingDice)
    }, [upcomingDice])

    const updateCurrentDie = useCallback((()=>{
        setCurrentDie(upcomingDice[0])
        setUpcomingDice([upcomingDice[1], rollDie()]) 

    }),[ setCurrentDie, upcomingDice, setUpcomingDice])

    const resetDice = useCallback((()=>{
        setCurrentDie(rollDie())
        setUpcomingDice([rollDie(), rollDie()]) 

    }),[ setCurrentDie,  setUpcomingDice])

    return [currentDie, upcomingDice, updateCurrentDie, resetDice]
}