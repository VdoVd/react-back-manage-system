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
     type: undefined,
     title:'首页'
   },
   {
     key: '/products',
     label: <Link to='/products'  style={{color:"#ffffffA4"}}>商品</Link>,

     icon:  <ShopOutlined />,
     title:'商品',
     children: [ // 子菜单列表
       {
         key: '/category',
         label:<Link to='/category'  style={{color:"#ffffffA4"}}>品类管理</Link>,

         icon: <ShoppingCartOutlined />,
         title: '品类管理'
       },
       {
         key: '/product',
         label: <Link to='/product'  style={{color:"#ffffffA4"}}>商品管理</Link>,

         icon: <ShoppingOutlined />,
         title: '商品管理'
       },
     ]
   },

   {
     key: '/user',
     label: <Link to='/user'  style={{color:"#ffffffA4"}}>用户管理</Link>,

     icon: <UserOutlined />,
     title: '用户管理'
   },
   {
     key: '/role',
     label: <Link to='/role'  style={{color:"#ffffffA4"}}>角色管理</Link>,

     icon: <UserOutlined />,
     title: '角色管理'
   },

   {
     key: '/charts',
     label: '图表图形',

     icon: <CalculatorFilled  />,
     title: '图表图形',
     children: [
       {
         key: '/charts/bar',
         label: <Link to='/charts/bar'  style={{color:"#ffffffA4"}}>柱形图</Link>,

         icon: <BarChartOutlined />,
         title: '柱形图'
       },
       {
         key: '/charts/line',
         label: <Link to='/charts/line' style={{color:"#ffffffA4"}}>折线图</Link>,

         icon: <LineChartOutlined />,
         title: '折线图'
       },
       {
         key: '/charts/pie',
         label: <Link to='/charts/pie'  style={{color:"#ffffffA4"}}>饼图</Link>,

         icon: <PieChartOutlined />,
         title: '饼图'
       },
     ]
   },

   {
     key: '/order',
     label: <Link to='/order'  style={{color:"#ffffffA4"}}>订单管理</Link>,

     icon: <ContainerOutlined />,
     title: '订单管理'
   }
]

export default menuList
