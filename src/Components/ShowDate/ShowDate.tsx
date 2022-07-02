import { useEffect, useState } from 'react';

import {DateContainer, DateNumbersContainer, DayValue, MonthYearContainer, DayName} from './ShowDate.styles'

type DateType = Date | null

const ShowDate = () => {
    const [getDate, setGetDate] = useState<DateType>(null)

    const getDayNumber = (): number | undefined => getDate?.getDate()
    const getDayName = (): string | undefined => getDate?.toLocaleString('en-US', { weekday: 'long' })
    const getMonth = (): string | undefined => getDate?.toLocaleString('en-US', { month: 'short' })
    const getYear = (): number | undefined => getDate?.getFullYear()

    useEffect(() => {
        const date = new Date()
        setGetDate(date)
    }, [])
    
    return (
        <DateContainer>
            <DateNumbersContainer>
                <div>
                    <DayValue>{getDayNumber()}</DayValue>
                </div>
                <MonthYearContainer>
                    <span>{getMonth()}</span>
                    <span>{getYear()}</span>
                </MonthYearContainer>
            </DateNumbersContainer>
            <div>
                <DayName>{getDayName()}</DayName>
            </div>
        </DateContainer>
    );
};

export default ShowDate;