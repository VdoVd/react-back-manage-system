import React from 'react';
import { Button } from 'antd';
import memoryUtils from "../../utils/memoryUtils";
import {Navigate} from "react-router-dom";
// import Login from "../login/login";
// import {  useNavigate } from "react-router-dom";
//
const Admin = (props) => {
    const user=memoryUtils.user
    // const history =  useNavigate ()
    // const handleGoTo = () => {
    //     history('/login')
    // }
    if(!user||!user._id){
        return <Navigate to="/login" replace />
    }
    return (
    <div >
        <Button type="primary">Hello</Button>
    </div>
    );
}

export default Admin;
