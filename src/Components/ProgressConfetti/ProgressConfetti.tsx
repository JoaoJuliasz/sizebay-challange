import { useState, useEffect, useContext } from 'react';

import { Confetti } from './ProgressConfetti.styles'

import { ItemsContext } from '../../context/Context'

type ProgressConfettiProps = {
    percent: number
}


const ProgressConfetti = ({ percent }: ProgressConfettiProps) => {
    const [fireConfetti, setFireConfetti] = useState(false)

    const itemContext = useContext(ItemsContext)

    useEffect(() => {
        if (percent === 100 && itemContext?.filterType === '' && itemContext.searchField === '') {
            setFireConfetti(true)
            setTimeout(() => {
                setFireConfetti(false)
            }, 500)
        }
    }, [percent])

    return <Confetti
        height='20'
        width='20'
        fire={fireConfetti}
    />
};

export default ProgressConfetti;