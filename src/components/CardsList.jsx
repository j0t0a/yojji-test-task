import { Col, Row } from 'antd';
import { CardItem } from './CardItem';

export const CardsList = () => {


    return (<Row gutter={16}>

        <Col span={8}>
            <CardItem></CardItem>
        </Col>

        <Col span={8}>
            <CardItem></CardItem>
        </Col>

        <Col span={8}>
            <CardItem></CardItem>
        </Col>

    </Row>)
};