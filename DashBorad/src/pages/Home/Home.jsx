import React, { useState, useEffect } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu, Col, Row } from 'antd';
import './Home.css'; 
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const items = [
  {
    key: 'sub1',
    label: 'Blog',
    icon: <MailOutlined />,
    children: [
      {
        key: '1',
        label: 'Add Blog',
      },
      {
        key: '2',
        label: 'View Blog',
      },
      {
        key: '3',
        label: 'Add Category',
      },
      {
        key: '4',
        label: 'View Category',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Account Info',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '5',
        label: 'Profile',
      },
      {
        key: '6',
        label: 'Logout',
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'grp',
    label: 'Group',
    type: 'group',
    children: [
      {
        key: '13',
        label: 'Option 13',
      },
      {
        key: '14',
        label: 'Option 14',
      },
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState('0'); // Default selection

  const onClick = (e) => {
    console.log('click ', e.key);
    setSelectedKey(e.key);
  };

  useEffect(() => {
    switch (selectedKey) {
      case '1':
        navigate('/home/createBlog');
        break;
      case '2':
        navigate('/home/viewBlog');
        break;
      case '5':
        navigate('/home/profile');
        break;
      case '6':
        navigate('/home/logout');
        break;
      default:
        navigate('/home/createBlog');
    }
  }, [selectedKey, navigate]); // Add `selectedKey` and `navigate` as dependencies

  return (
    <div className="home-container">
      <Row gutter={[16]}>
        {/* Sidebar Menu */}
        <Col xs={24} sm={24} md={8} lg={5}>
          <Menu
            onClick={onClick}
            style={{
              height: "100vh",
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              borderTopRightRadius: '10px',  // Corrected
              borderBottomRightRadius: '10px',  // Corrected
              padding: '10px',
              boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
            className="premium-menu"
          />
        </Col>

        {/* Menu Content */}
        <Col xs={24} sm={24} md={16} lg={19}>
          <div className="content-area" style={{ 
            height: "100vh", 
            backgroundColor: '#f0f2f5', 
            borderRadius: '10px', 
            padding: '20px', 
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' 
          }}>
            <Outlet />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
