import React from 'react';
import {Layout} from 'antd';
// import {Switch} from "antd";
import memoryUtils from "../../utils/memoryUtils";
import {Navigate, Outlet} from "react-router-dom";
import {Route,Routes} from 'react-router-dom'
import Head from "../../components/header/header";
import LeftNav from "../../components/left nav/left-nav";
import Home from "../home/home";
import Category from "../category/category";
// import Charts from "../charts/charts";
import Bar from "../charts/bar";
import Product from "../product/product";
import Role from "../role/role";
import User from "../User/User";
import Line from "../charts/Line";
// import Login from "../login/login";
import Pie from "../charts/pie";
import Order from "../Order/Order";
import Charts from "../charts/charts";
import Products from "../products/products";
import ProductHome from "../product/home";
// import {  useNavigate } from "react-router-dom";;
const {  Footer, Sider, Content } = Layout;
const Admin = (props) => {
    const user=memoryUtils.user
    // const history =  useNavigate ()
    // const handleGoTo = () => {
    //     history('/login')
    // }
    console.log('admin')
    if(!user||!user._id){
        return <Navigate to="/login" replace />
    }
    return (
        <Layout style={{height: '100%'}}>
            <Sider>
                <LeftNav />
            </Sider>
            <Layout>
                <Head>Header</Head>
                <Content style={{backgroundColor: '#fff',margin:20}}>
                        <Routes>
                            {/*<Route path='/' element={<Admin />}></Route>*/}
                            <Route path='/home'  element={<Home />}></Route>
                            <Route path='/category' element={<Category/>}/>
                            <Route path='/products' element={<Products/>}/>
                            <Route path='/product/*' element={<Product/>}/>
                            <Route path='/user' element={<User/>}/>
                            <Route path='/role' element={<Role/>}/>
                            <Route path='/charts' element={<Charts/>}/>
                            <Route path="/charts/bar" element={<Bar/>}/>
                            <Route path="/charts/pie" element={<Pie/>}/>
                            <Route path="/charts/line" element={<Line/>}/>
                            <Route path="/order" element={<Order />}/>
                            <Route path='/pie' element={<Pie />}/>
                            <Route path="*" element={<Navigate to="/home" replace />} />
                        </Routes>

                    {/*<Switch>*/}
                    {/*    /!*<Redirect from='/' exact to='/home'/>*!/*/}
                    {/*    <Route path='/home' element={Home}/>*/}

                    {/*    /!*<Route element={NotFound}/>*!/*/}
                    {/*</Switch>*/}
                </Content>
                <Footer style={{textAlign: "center",color:'#cccc'}}>推荐使用谷歌浏览器,可以获得最佳页面体验</Footer>
            </Layout>
        </Layout>
    );
}

export default Admin;
