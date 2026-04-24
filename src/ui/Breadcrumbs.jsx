import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const MyBreadcrumb = ({ current }) => {
  const items = [
    { title: <Link to="/">Главная</Link> },
    { title: current }
  ];

  return <Breadcrumb separator="> " items={items} />;
};

export default MyBreadcrumb;
