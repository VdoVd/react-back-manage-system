import React from "react";
import './login.less'
import logo from './img/logo.png'
import {Navigate, useNavigate} from "react-router-dom";
import { Button, Form, Input,message } from 'antd';
import {UserOutlined,LockOutlined} from '@ant-design/icons'
import {reLogin} from "../../api/index";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from '../../utils/sorageUtils'

const Login=(props)=> {
    const [form] = Form.useForm();
    const history =  useNavigate ()
    const handleGoTo = () => {
        history('/')
    }
    const user=memoryUtils.user
    if(user&&user._id){
        return <Navigate to="/"  />
    }

    const onCheck = async (props) => {
        try {
            const values =await form.validateFields();
            console.log('验证成功:', values);
            const response=await reLogin(values.username,values.password)
            if(response.status===0){
                message.success('登陆成功')
                const user=response.data
                memoryUtils.user=user
                storageUtils.saveUser(user)
                handleGoTo()
            }else {
                message.error(response.msg)
            }
        } catch (errorInfo) {
            console.log('验证失败:',errorInfo);
        }
    };
    return (
        <div className="login">
            <header className="login-header">
                <img src={logo} alt='logo'/>
                <h1>react项目:后台管理系统</h1>
            </header>
            <section className="login-content">
                <h2>用户登陆</h2>
                <Form
                    form={form}
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onCheck }
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
                                min: 4, message: '用户名最少4位'
                            },
                            {
                                max: 12, message: '用户名最多12位'
                            },
                            {
                                pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须为字母数字下划线'
                            }
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                //自定义验证
                                // required: true,
                                // message: 'Please input your Password!',
                                validator: (rule, value, callback) => {
                                    console.log('validatePwd()', rule, value)
                                    if (!value) {
                                        callback('必须输入密码')
                                    } else if (value.length < 4) {
                                        callback('密码长度不能小于4')
                                    } else if (value.length > 12) {
                                        callback('密码长度不能大于12')
                                    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
                                        callback('密码必须是英文,数字或下划线组成')
                                    } else {
                                        callback()
                                    }
                                }
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
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
export default Login
