import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Form, Input, Alert, Card, Typography } from 'antd';
import { LoginOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
const { Text } = Typography;

const Login = () => {
  // State to hold informational or error messages
  const [info, setInfo] = useState('');
  const navigate = useNavigate();


  const onFinish = async (values) => {
    try {
      
      const response = await axios.post("http://localhost:14261/user/login", {
        email: values.email,
        password: values.password,
      }, {
        headers: {
          'authorization': '12345678',
        }
      });

       console.log(response.data);
       
 
      if (response.data.emailVerified) {
        navigate("/home"); 
      } else {
        setInfo(response.data.message);
      }
    } catch (error) {
      // Handle error by showing a generic message
      setInfo('Error during login, please try again.');
    }
  };

  // Function to handle validation failure
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'url(https://harnishdesign.net/demo/react/callum/demo/images/intro-bg.jpg) no-repeat center',
      backgroundSize: 'cover' 
    }}>
      {/* Card for the login form with a modern design */}
      <Card
        title={<h2 style={{ textAlign: 'center' , marginTop: "30px"}}><LoginOutlined /> Login</h2>}
        style={{ 
          width: 400, 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', 
          borderRadius: '12px', 
          backgroundColor: 'rgba(255, 255, 255, 0.9)' 
        }}
        bordered={false}
        bodyStyle={{ padding: '40px' }}
      >
        {/* Display alert if there is any info (e.g., error or message) */}
        {info && <Alert message={info} type="error" showIcon style={{ marginBottom: '16px' }} />}
        
        {/* Login form */}
        <Form
          name="login"
          wrapperCol={{ span: 24 }} 
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* Email Input Field */}
          <Form.Item
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]}
          >
            <Input 
              prefix={<MailOutlined />} 
              placeholder="Enter your email" 
              style={{ height: '40px', borderRadius: '8px' }}
            />
          </Form.Item>

          {/* Password Input Field */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password 
              prefix={<LockOutlined />} 
              placeholder="Enter your password"
              style={{ height: '40px', borderRadius: '8px' }} 
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ 
                width: '100%', 
                height: '40px', 
                marginTop: '10px', 
                background: 'linear-gradient(90deg, #4caf50, #4cafb0)',
                border: 'none',
                borderRadius: '8px', 
                transition: 'all 0.3s', 
              }}
              >
              Submit
            </Button>
          </Form.Item>
        </Form>

        {/* Link to sign-up page */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
           <Text type="secondary" style={{ fontSize: '16px',  }}>
            Create an account | <Link to="/" style={{ color: '#1890ff' }}>Sign Up</Link>
          </Text>
         </div>
      </Card>
    </div>
  );
};

export default Login;
