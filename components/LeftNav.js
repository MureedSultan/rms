import { useRouter } from 'next/router';
import Link from 'next/link';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

function LeftNav() {
  const router = useRouter();
  const selectedRoute = [router.pathname.substring(1)];
  return (
    <>
      
      <Sider width={200} style={{background: "#fff"}}>
        
        <Menu theme="light" mode="inline" selectedKeys={selectedRoute}>
          <Menu.Item key="landing">
            <Link href="/landing">
              <div>
                {/* <VideoCameraOutlined /> */}
                <span>Home</span>
              </div>
            </Link>
          </Menu.Item>

          <Menu.Item key="restaurants">
            <Link href="/restaurants">
              <div>
                {/* <VideoCameraOutlined /> */}
                <span>Restaurants</span>
              </div>
            </Link>
          </Menu.Item>

          <Menu.Item key="users">
            <Link href="/users">
              <div>
                {/* <VideoCameraOutlined /> */}
                <span>Users</span>
              </div>
            </Link>
          </Menu.Item>

          <Menu.Item key="orders">
            {/* <VideoCameraOutlined /> */}
            <span>Orders</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default LeftNav;
