import React from 'react';
import { Typography, Card, Form, Input, Button, message } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Customer Info:', values);
    message.success('Information submitted successfully!');
    form.resetFields();
  };

  return (
    <div>
      <Title level={3}>Customer Information</Title>
      
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 500, marginBottom: '40px' }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter your username' }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item
          label="Contact"
          name="contact"
          rules={[{ required: true, message: 'Please enter your contact number' }]}
        >
          <Input placeholder="Enter your contact number" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Enter a valid email address' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Title level={3}>Explore the best deals on Sasto Bajar</Title>
      <Paragraph>We bring you affordable shopping, fast delivery, and trusted service.</Paragraph>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Card title="Great Deals" style={{ width: 300 }}>
          Save more every day with special discounts & offers.
        </Card>
        <Card title="Fast Delivery" style={{ width: 300 }}>
          We deliver to your doorstep within 2-3 days.
        </Card>
        <Card title="Secure Payments"  style={{ width: 300 }}>
          Your transactions are encrypted and safe.
        </Card>
      </div>
    </div>
  );
};

export default Home;
