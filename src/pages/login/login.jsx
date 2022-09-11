import React, {Component} from "react";
import './login.less'
import logo from './img/logo.png'
import { Button, Form, Input } from 'antd';
import {UserOutlined,LockOutlined} from '@ant-design/icons'
 class Login extends Component{

    render() {
        const onFinish = (values) => {
            // events.preventDefault()
            // this.props.form.validateFields((err,values)=>{
            //     if(!err){
            console.log('Received values of form: ', values);
            //     }else {
            //         console.log('校验失败')
            //     }
            // })
            // const form=this.props.form
            // const values=form.getFieldsValue()
            // console.log('handleSubmit()',values)
        };
        // const validatePwd=(rule,value,callback)=>{
        //     console.log('validatePwd()',rule,value)
        //     callback()
        // }
        return(
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt='logo'/>
                    <h1>react项目:后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登陆</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    whitespace: true,
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                                {
                                    min: 4,message: '用户名最少4位'
                                },
                                {
                                    max: 12,message: '用户名最多12位'
                                },
                                {
                                    pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须为字母数字下划线'
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    // required: true,
                                    // message: 'Please input your Password!',
                                    validator:(rule,value,callback)=> {
                                        console.log('validatePwd()',rule,value)
                                        if(!value){
                                            callback('必须输入密码')
                                        }else if(value.length<4)
                                        {
                                            callback('密码长度不能小于4')
                                        }else if(value.length>12){
                                            callback('密码长度不能大于12')
                                        }else if(/^[a-zA-Z0-9_]+$/.test(value)){
                                            callback('密码必须是英文,数字或下划线组成')
                                        }else{
                                            callback()
                                        }
                                    }
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
export default Login
