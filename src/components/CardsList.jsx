import { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import moment from 'moment/moment';
import { getNeoByDate } from '../api/api';
import { CardItem } from './CardItem';

export const CardsList = () => {
    const [neoDays, setNeoDays] = useState([]);
    const [date, setDate] = useState(moment().startOf('month'));

    useEffect(() => {

        const interval = setInterval(() => {
            getNeoByDate(date, (neos) => setNeoDays((prev) => {
                let result = prev

                if(prev.length === 6){
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
            
        }, 1000);

        return () => clearInterval(interval)

    },[]);


    return (
        <Row gutter={[16, 16]}>
            {neoDays.map((day, index) => {
                return <Col key={index}>
                    <CardItem></CardItem>
                </Col>
            })}
        </Row>
    )
};