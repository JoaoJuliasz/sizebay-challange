import { useContext } from 'react'

// Importing libs
// @ts-ignore
import { Progress } from 'antd';

import { Items } from '../../utils/types'
import ProgressConfetti from '../ProgressConfetti/ProgressConfetti';
import { ProgressContainer } from './Progress.styles';

type ShowProgressProps = {
    items: Items[],
}

const ShowProgress = ({ items }: ShowProgressProps) => {

    const fillProgress = () => {
        let progressCounter = 0
        let itemsLenght = items.length
        items.map(item => {
            if (item.status.includes('done')) {
                progressCounter++
            }
        })
        return items.length > 0 ? progressCounter * 100 / itemsLenght : 0
    }

    return (
        <ProgressContainer>
            <Progress className="progressBar" showInfo={false} percent={fillProgress()} strokeColor={fillProgress() === 0 ? '#f5f5f5' : '#68e291'} />
            <ProgressConfetti percent={fillProgress()} />
        </ProgressContainer>
    );
};

export default ShowProgress;