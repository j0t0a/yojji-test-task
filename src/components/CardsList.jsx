import { Col, Row } from 'antd';
import { CardItem } from './CardItem';
import { useEffect, useState } from 'react';
import { dateFormats } from '../constants/date';
import { getNeoByDate } from '../api/api';
import moment from 'moment/moment';

export const CardsList = () => {
    const [neoDays, setNeoDays] = useState([])
    const [date, setDate] = useState(moment())

    useEffect(() => {
        getNeoByDate(date, (neos) => setNeoDays((prev) => [...prev, {...neos}])) 
    },[])

    return (
    <Row gutter={[16, 16]}>

        {neoDays.map( (neo, index) => {
            return <Col key={index} span={24}>
                <CardItem></CardItem>
            </Col>
        })}
        
    </Row>)
};