import Layout from '../components/Layout';
import { Card, Col, Row } from 'antd';

const restaurants = () => {
  return (
    <Layout>
      <Row gutter={16}>
        <Col span={24}>
          <Card title="New Restaurant" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default restaurants;
