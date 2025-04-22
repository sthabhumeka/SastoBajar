import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Cart = () => {
  return (
    <div>
      <Title level={3}>Your Shopping Cart</Title>
      <p>View and manage the items you want to purchase.</p>
    </div>
  );
};

export default Cart;
