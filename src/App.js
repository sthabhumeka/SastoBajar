// // import React, { useState } from 'react';
// // import './App.css';
// // import StdList from './StdList.js';
// // import Counter from './test.js';
// // function App() {
// //   const [count, setCount] = useState(0);

// //   const [randomNumber, setRandomNumber] = useState(0);

// //   const increment = () => {
// //     setCount(count + 1);
// //   };

// //   const decrement = () => {
// //     setCount(count - 1);
// //   };
// //   const spin = () => {
// //     const randomValue = Math.floor(Math.random() * 100) + 1;
// //     setRandomNumber(randomValue);
// //   };

// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <StdList/>
// //         <Counter/>
// //         <p>
// //           Counter: <span>{count}</span>
// //         </p>
// //         <div>
// //           <button onClick={increment}>Increment</button>
// //           <button onClick={decrement}>Decrement</button>
// //         </div>
      
// //         <div style={{ marginTop: '20px' }}>
// //           <p>Random Spin Box</p>
// //           <div className="spin-box">
// //             <p>{randomNumber}</p>
// //           </div>
// //           <button onClick={spin}>Spin</button>
// //         </div>
// //       <div>
// //       </div>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// // import { useEffect, useState } from "react";
// // import { Table, Watermark } from "antd";
// // import "antd/dist/reset.css";
// // import Test from "./test";
// // import { DatePicker, Space } from 'antd';
// // import { Button, Checkbox, Form, Input } from 'antd';
// // const { RangePicker } = DatePicker;

// // function App() {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
// //       .then((response) => response.json())
// //       .then((result) => setData(result.data))
// //       .catch((error) => console.log("error"));
// //   }, []);

// //   // const columns = [
// //   //   { title: "Nation", dataIndex: "Nation", key: "Nation" },
// //   //   { title: "Year", dataIndex: "Year", key: "Year" },
// //   //   { title: "Population", dataIndex: "Population", key: "Population" },
// //   // ];
// //   const columns = [
// //     {
// //       title: "Nation",
// //       dataIndex: "Nation",
// //       key: "Nation",
// //       sorter: (a, b) => {
// //         if (a.Nation > b.Nation) return 1;
// //         if (a.Nation < b.Nation) return -1;
// //         return 0;
// //       },
// //     },
// //     {
// //       title: "Year",
// //       dataIndex: "Year",
// //       key: "Year",
// //       sorter: (a, b) => a.Year - b.Year,
// //     },
// //     {
// //       title: "Population",
// //       dataIndex: "Population",
// //       key: "Population",
// //       sorter: (a, b) => a.Population - b.Population,
// //     },
// //   ];
  
// //   const onFinish = values => {
// //     console.log('Success:', values);
// //   };
// //   const onFinishFailed = errorInfo => {
// //     console.log('Failed:', errorInfo);
// //   };
// //   const col = [
// //     {
// //       title: "Nation",
// //       dataIndex: "Nation",
// //       key: "Nation",
// //       sorter: (a, b) => {
// //         if (a.Nation > b.Nation) return 1;
// //         if (a.Nation < b.Nation) return -1;
// //         return 0;
// //       },
// //     },
// //     {
// //       title: "Year",
// //       dataIndex: "Year",
// //       key: "Year",
// //       sorter: (a, b) => a.Year - b.Year,
// //     },
// //     {
// //       title: "Population",
// //       dataIndex: "Population",
// //       key: "Population",
// //       sorter: (a, b) => a.Population - b.Population,
// //     },
// //   ];
  

// //   return (
// //     <div>
     

// //         <Space direction="vertical" size={12}>
// //     <RangePicker />
// //     <RangePicker showTime />
// //     <RangePicker picker="week" />
// //     <RangePicker picker="month" />
// //     <RangePicker picker="quarter" />
// //     <RangePicker
// //       picker="year"
// //       id={{
// //         start: 'startInput',
// //         end: 'endInput',
// //       }}
// //       onFocus={(_, info) => {
// //         console.log('Focus:', info.range);
// //       }}
// //       onBlur={(_, info) => {
// //         console.log('Blur:', info.range);
// //       }}
// //     />
// //   </Space>



// //   <Form
// //     name="basic"
// //     labelCol={{ span: 8 }}
// //     wrapperCol={{ span: 16 }}
// //     style={{ maxWidth: 600 }}
// //     initialValues={{ remember: true }}
// //     onFinish={onFinish}
// //     onFinishFailed={onFinishFailed}
// //     autoComplete="off"
// //   >
// //     <Form.Item
// //       label="Username"
// //       name="username"
// //       rules={[{ required: true, message: 'Please input your username!' }]}
// //     >
// //       <Input />
// //     </Form.Item>

// //     <Form.Item
// //       label="Password"
// //       name="password"
// //       rules={[{ required: true, message: 'Please input your password!' }]}
// //     >
// //       <Input.Password />
// //     </Form.Item>

// //     <Form.Item name="remember" valuePropName="checked" label={null}>
// //       <Checkbox>Remember me</Checkbox>
// //     </Form.Item>

// //     <Form.Item label={null}>
// //       <Button type="primary" htmlType="submit">
// //         Submit
// //       </Button>
// //     </Form.Item>
// //   </Form>
// // <Test name={"Bhumika"}/>

// //       <h1>US Data</h1>
// //       <Table dataSource={data.map((item,index)=>({...item, key:index}))} columns={columns} pagination={{pageSize:10}} bordered/>;
    
// //     </div>
// //   );
// // }

// // export default App;


// import React from 'react';
// import { Layout } from 'antd';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './component/sidebar';
// import Home from './pages/Home';
// import Products from './pages/Products';
// import Cart from './pages/cart';
// import Contact from './pages/contact';

// const { Header, Content } = Layout;

// const App = () => {
//   return (
//     <Router>
//       <Layout style={{ minHeight: '100vh' }}>
//         <Sidebar />
//         <Layout>
//           <Header style={{ background: '#fff', textAlign: 'center' }}>
//             <h2>Welcome to Sasto Bajar</h2>
//           </Header>
//           <Content style={{ margin: '16px' }}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </Content>
//         </Layout>
//       </Layout>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/cart';
import Contact from './pages/contact';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Layout style={{ minHeight: '100' }}>
        <Sidebar collapsed={collapsed} />
        <Layout>
          <Header style={{ background: '#fff', padding: '0 16px', display: 'flex', alignItems: 'center' }}>
            {collapsed ? (
              <MenuUnfoldOutlined onClick={() => setCollapsed(false)} style={{ fontSize: '20px', marginRight: '16px' }} />
            ) : (
              <MenuFoldOutlined onClick={() => setCollapsed(true)} style={{ fontSize: '20px', marginRight: '16px' }} />
            )}
            <h2 style={{ margin: 0 }}>Welcome to Sasto Bajar</h2>
          </Header>
          <Content style={{ margin: '16px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
