import { Card, Descriptions } from 'antd';

export const CardItem = ({day}) => (  
  <Card  bordered={false}>
    <Descriptions title={day.date}>
      <Descriptions.Item label="Max diameter">{day.max_estimated_diameter}</Descriptions.Item>
      <Descriptions.Item label="Potentially hazardous">{day.number_of_potentially_hazardous}</Descriptions.Item>
      <Descriptions.Item label="Closest NEO">{day.closest_NEO}</Descriptions.Item>
      <Descriptions.Item label="Fastest NEO">{day.fastest_NEO}</Descriptions.Item>
    </Descriptions>
  </Card>
);
