import Layout from '../components/Layout';
import { Row, Col, Card } from 'antd';

function Users() {
  return (
    <Layout>
      <Row gutter={16}>
        <Col span={24}>
          <Card title="New User" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default Users;
