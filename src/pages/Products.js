// import React from 'react';
// import { Typography } from 'antd';

// const { Title } = Typography;

// const Products = () => {
//   return (
//     <div>
//       <Title level={3}>Browse Products</Title>
//       <p>Here we will show the list of products.</p>
//     </div>
//   );
// };

// export default Products;

import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber, Space, message } from 'antd';

const Products = () => {
  const [form] = Form.useForm();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Huda Foundation',
      price: 3500,
      quantity: 1,
      brand: 'Huda Beauty',
    },
    {
      id: 2,
      name: 'Huda Eyeshades',
      price: 7999,
      quantity: 2,
      brand: 'Huda Beauty'
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const showModal = (product = null) => {
    setEditingProduct(product);
    form.setFieldsValue(product || { name: '', price: '', quantity: '', brand: '' });
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      if (editingProduct) {
        setProducts(prev =>
          prev.map(prod =>
            prod.id === editingProduct.id ? { ...editingProduct, ...values } : prod
          )
        );
        message.success('Product updated');
      } else {
        const newProduct = {
          id: Date.now(),
          ...values
        };
        setProducts(prev => [...prev, newProduct]);
        message.success('Product added');
      }
      form.resetFields();
      setIsModalOpen(false);
      setEditingProduct(null);
    });
  };

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(product => product.id !== id));
    message.success('Product deleted');
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Price (Rs.)', dataIndex: 'price', key: 'price' },
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Brand', dataIndex: 'brand', key: 'brand' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => showModal(record)}>Edit</Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>Delete</Button>
        </Space>
      )
    }
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ textAlign: 'center' }}>Sasto Bajar</h2>
      <h3 style={{ textAlign: 'center' }}>Product Management</h3>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <Button type="primary" onClick={() => showModal()}>+ Add Product</Button>
      </div>
      <Table dataSource={products} columns={columns} rowKey="id" pagination={{ pageSize: 5 }} />

      <Modal
        title={editingProduct ? 'Edit Product' : 'Add Product'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Product Name" rules={[{ required: true }]}>
            <Input placeholder="e.g. Huda Beauty, Foundation" />
          </Form.Item>
          <Form.Item name="price" label="Price (Rs.)" rules={[{ required: true }]}>
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="quantity" label="Quantity" rules={[{ required: true }]}>
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="brand" label="Brand Name" rules={[{ required: true }]}>
            <Input placeholder="e.g. Huda Beauty,EyeShades" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Products;
