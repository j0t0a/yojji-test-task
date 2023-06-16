import { useState } from 'react';
import { Col, Row } from 'antd';
import moment from 'moment/moment';
import { getNeoByDate } from '../api/api';
import { CardItem } from './CardItem';
import { useInterval } from '../hooks/useInterval';

const REQUEST_DELAY = 5000
const MAX_ITEMS_COUNT = 6

export const CardsList = () => {
    const [neoDays, setNeoDays] = useState([]);
    const [date, setDate] = useState(moment().startOf('month'));

    function dataSet() {
        getNeoByDate(date, (neos) => setNeoDays((prev) => {
            let result = prev

            if(prev.length === MAX_ITEMS_COUNT){
                result = result.slice(1, result.length)
            }

            return [...result, {...neos}]
        })) 

          
        setDate(prev => {
            if(prev.isSame(moment(), 'day')){
                prev.startOf('month')
            }else{
                prev.add(1, 'day')
            }
        
            return prev
        })
    }

    useInterval(dataSet, REQUEST_DELAY)

    function getIsHazardous(date){
        const daysByHazardousNumber = [...neoDays].sort((prevDay, nextDay) => {
            return nextDay.number_of_potentially_hazardous - prevDay.number_of_potentially_hazardous
        }).slice(0, 2)

        return daysByHazardousNumber.find( day => day.date === date)
    }

    return (
        <Row gutter={[16, 16]}>
            {neoDays.map((day, index) => {
                return <Col key={index}>
                    <CardItem isHazardous={getIsHazardous(day.date)} day={day}></CardItem>
                </Col>
            })}
        </Row>
    )
};