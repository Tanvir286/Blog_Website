import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Form, Input, Card, Alert, Typography } from 'antd';
import { UserAddOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Registration = () => {
  const [info, setInfo] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    setInfo('');
    setError('');

    console.log('Submitting form with values:', values);

    try {
      const response = await axios.post('http://localhost:14261/user/registration', {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      console.log('Response received:', response);

      if (response.status === 200) {
        setInfo(response.data.message);
        setLoading(false);
        setTimeout(() => navigate('/login'), 3000);
      }
    } 
    catch (error) {
      setLoading(false);
      console.error('Error occurred during registration:', error);

      if (error.response) {
        if (error.response.status === 409) {
          setError("Email already in use. Please try another.");
        } else if (error.response.status === 400) {
          setError(error.response.data.message || "Validation error occurred.");
        } else {
          setError("Something went wrong. Please try again.");
        }
      } else {
        setError("Network error. Please check your connection.");
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'url(https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center',
        backgroundSize: 'cover',
      }}
    >
      <Card
        title={
          <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>
            <UserAddOutlined /> Sign Up
          </Title>
        }
        style={{
          width: 400,
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
          borderRadius: '12px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
        bordered={false}
        bodyStyle={{ padding: '30px' }}
      >
        {/* Display success or error messages */}
        {info && <Alert message={info} type="success" showIcon style={{ marginBottom: '16px' }} />}
        {error && <Alert message={error} type="error" showIcon style={{ marginBottom: '16px' }} />}

        {/* Form start */}
        <Form
          name="registration"
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* Username input */}
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserAddOutlined />}
              placeholder="Enter your username"
              style={{ height: '40px', borderRadius: '8px' }}
            />
          </Form.Item>
          {/* Email input */}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please input a valid email address!',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Enter your email"
              style={{ height: '40px', borderRadius: '8px' }}
            />
          </Form.Item>
          {/* Password input */}
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
          {/* Submit button */}
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
              loading={loading}
            >
              Click Here
            </Button>
          </Form.Item>
        </Form>

        {/* Link to login page */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Text type="secondary" style={{ fontSize: '16px' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#1890ff' }}>
              Login
            </Link>
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default Registration;
