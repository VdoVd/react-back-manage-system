import React from "react";
import './index.less'
import logo from './img/logo.png'
import menuList from "../../config/menuConfig";
import {
        // MailOutlined,
        // BarChartOutlined ,
        // LineChartOutlined ,
        // UserOutlined ,
        // ShopOutlined,
        // ShoppingCartOutlined ,
        // ShoppingOutlined ,
        // CalculatorFilled,
        // HomeFilled ,
        // PieChartOutlined,
} from '@ant-design/icons';
import {  Menu} from 'antd';
// import { useState } from 'react';
import {Link, useLocation} from "react-router-dom";
// function getItem(label, key, icon, children, type) {
//     return {
//         key,
//         icon,
//         children,
//         label,
//         type,
//     };
// }
// const i=[{key:'1',icon:'<HomeFilled />',children:null,label:'null',type:null}]
// const l=menuList.map((n)=>{
//     if (n.children|0){
//         return getItem(n.title,n.key,n.icon)
//     }else {
//         return getItem(n.title,n.key,n.icon,n.children.map((n)=>{
//             getItem(n.title,n.key,n.icon)
//         }))
//     }
// })
// const t= [{
//     key: '1',
//     icon: <HomeFilled />,
//     children: undefined,
//     label: '首页',
//     type: undefined
// }
// ]

// const items = [
//     getItem('首页', '1', <HomeFilled />),
//     getItem('商品', '2', <ShopOutlined />,[
//         getItem('品类管理', '1', <ShoppingCartOutlined />),
//         getItem('商品管理', '2', <ShoppingOutlined />),
//     ]),
//     getItem('用户管理', '3', <UserOutlined />),
//     getItem('角色管理', '4', <MailOutlined />, [
//         getItem('Option 5', '5'),
//     ]),
//     getItem('图形图表', '5', <CalculatorFilled  />, [
//         getItem('柱形图', '9',<BarChartOutlined />),
//         getItem('折线图', '10',<LineChartOutlined />),
//         getItem('饼图', 'sub3', <PieChartOutlined />, ),
//     ]),
// ];
// const path=menuList.map((n)=>n.key)
const LeftNav=()=> {
    const location = useLocation();
    let { pathname } = location;
    if(pathname==='/product*'){
        pathname='/product'
    }
    return (
        <div className="left-nav">
            <Link to='/' className="left-nav-header">
                <img src={logo} alt="logo"/>
                <h1>后台系统</h1>
            </Link>
            <div
                style={{
                    width: 200,
                }}
            >
                <Menu
                    defaultSelectedKeys={['/home']}
                    defaultOpenKeys={['/home']}
                    mode="inline"
                    theme="dark"
                    // inlineCollapsed={collapsed}
                    items={menuList}
                    // onClick={}
                />
            </div>
        </div>
    )
}
export default LeftNav
