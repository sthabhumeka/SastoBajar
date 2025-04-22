// import React from 'react';
// import { Layout, Menu } from 'antd';
// import {
//   HomeOutlined,
//   ShopOutlined,
//   ShoppingCartOutlined,
//   PhoneOutlined
// } from '@ant-design/icons';
// import { Link } from 'react-router-dom';

// const { Sider } = Layout;

// const Sidebar = () => {
//   return (
//     <Sider breakpoint="lg" collapsedWidth="0">
//       <div style={{ color: 'white', padding: '16px', fontSize: '20px', fontWeight: 'bold' }}>
//         Sasto Bajar
//       </div>
//       <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//         <Menu.Item key="1" icon={<HomeOutlined />}>
//           <Link to="/">Home</Link>
//         </Menu.Item>
//         <Menu.Item key="2" icon={<ShopOutlined />}>
//           <Link to="/products">Products</Link>
//         </Menu.Item>
//         <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
//           <Link to="/cart">Cart</Link>
//         </Menu.Item>
//         <Menu.Item key="4" icon={<PhoneOutlined />}>
//           <Link to="/contact">Contact</Link>
//         </Menu.Item>
//       </Menu>
//     </Sider>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  return (
    <Sider collapsible collapsed={collapsed} trigger={null} breakpoint="lg">
      <div style={{ color: 'white', padding: '16px', fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
        {collapsed ? 'SB' : 'Sasto Bajar'}
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ShopOutlined />}>
          <Link to="/products">Products</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
          <Link to="/cart">Cart</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<PhoneOutlined />}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;

