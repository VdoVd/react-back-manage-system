import React from 'react';
import {Layout} from 'antd';
import memoryUtils from "../../utils/memoryUtils";
import {Navigate} from "react-router-dom";


const { Header, Footer, Sider, Content } = Layout;
// import Login from "../login/login";
// import {  useNavigate } from "react-router-dom";;
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
            <Sider>Sider</Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    );
}

export default Admin;
