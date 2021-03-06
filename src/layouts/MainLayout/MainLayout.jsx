import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './MainLayout.less';


import { Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

const MainLayout = ({ children }) => {
  return (
    <div className={styles['ant-layout-aside']}>
      <aside className={styles['ant-layout-sider']}>
        <div className={styles['ant-layout-logo']}></div>
        <Menu mode="inline" theme="dark"
          defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
          <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
            <Menu.Item key="1">选项1</Menu.Item>
            <Menu.Item key="2">选项2</Menu.Item>
            <Menu.Item key="3">选项3</Menu.Item>
            <Menu.Item key="4">选项4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
            <Menu.Item key="5">选项5</Menu.Item>
            <Menu.Item key="6">选项6</Menu.Item>
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
            <Menu.Item key="9">选项9</Menu.Item>
            <Menu.Item key="10">选项10</Menu.Item>
            <Menu.Item key="11">选项11</Menu.Item>
            <Menu.Item key="12">选项12</Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
      <div className={styles['ant-layout-main']}>
        <div className={styles['ant-layout-header']}></div>
        <div className={styles['ant-layout-breadcrumb']}>
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
            <Breadcrumb.Item>某应用</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles['ant-layout-container']}>
          <div className={styles['ant-layout-content']}>
            <div style={{ height: 590 }}>
              {children}
            </div>
          </div>
        </div>
        <div className={styles['ant-layout-footer']}>
        Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
        </div>
      </div>
    </div>
    );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;