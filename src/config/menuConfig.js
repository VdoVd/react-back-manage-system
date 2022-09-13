import {
  BarChartOutlined,
  CalculatorFilled, ContainerOutlined,
  HomeFilled, LineChartOutlined, PieChartOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined
} from "@ant-design/icons";
import React from "react";
import {Link} from "react-router-dom";

const menuList = [
   {
     key: '/home',
     icon: <HomeFilled />,
     children: undefined,
     label: <Link to='/home' style={{color:"#ffffffA4"}}>首页</Link>,
     type: undefined
   },
   {
     label: <Link to='/products'  style={{color:"#ffffffA4"}}>商品</Link>,
     key: '/products',
     icon:  <ShopOutlined />,
     children: [ // 子菜单列表
       {
         label:<Link to='/category'  style={{color:"#ffffffA4"}}>品类管理</Link>,
         key: '/category',
         icon: <ShoppingCartOutlined />
       },
       {
         label: <Link to='/product'  style={{color:"#ffffffA4"}}>商品管理</Link>,
         key: '/product',
         icon: <ShoppingOutlined />
       },
     ]
   },

   {
     label: <Link to='/user'  style={{color:"#ffffffA4"}}>用户管理</Link>,
     key: '/user',
     icon: <UserOutlined />
   },
   {
     label: <Link to='/role'  style={{color:"#ffffffA4"}}>角色管理</Link>,
     key: '/role',
     icon: <UserOutlined />,
   },

   {
     label: '图表图形',
     key: '/charts',
     icon: <CalculatorFilled  />,
     children: [
       {
         label: <Link to='/charts/bar'  style={{color:"#ffffffA4"}}>柱形图</Link>,
         key: '/charts/bar',
         icon: <BarChartOutlined />
       },
       {
         label: <Link to='/charts/line' style={{color:"#ffffffA4"}}>折线图</Link>,
         key: '/charts/line',
         icon: <LineChartOutlined />
       },
       {
         label: <Link to='/charts/pie'  style={{color:"#ffffffA4"}}>饼图</Link>,
         key: '/charts/pie',
         icon: <PieChartOutlined />
       },
     ]
   },

   {
     label: <Link to='/order'  style={{color:"#ffffffA4"}}>订单管理</Link>,
     key: '/order',
     icon: <ContainerOutlined />
   }
]

export default menuList
