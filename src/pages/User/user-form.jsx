import React from 'react'
import {
    Form,
    Select,
    Input
} from 'antd'
import {useForm} from "antd/es/form/Form";
const Option = Select.Option

/*
添加/修改用户的form组件
 */
const UserForm=(props)=>  {
    const [form]=useForm()
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    props.setForm(form)
    let user
    if(props.user===null){
        user=1
    }else {
        user = props.user
    }
    const roles=props.roles
    return (
        <Form
            form={form}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="用户名"
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名',
                    },
                ]}
                initialValue={user===1?'':user.username}
            >

                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入密码!',
                    },
                ]}
                initialValue={user===1?'':user.password}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="手机号"
                name="phone"
                rules={[
                    {
                        required: true,
                        message: '请输入手机号码',
                    },
                ]}
                initialValue={user===1?'':user.phone}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="邮箱"
                name="email"
                rules={[
                    {
                        required: true,
                        message: '请输入邮箱',
                    },
                ]}
                initialValue={user===1?'':user.email}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="角色"
                name="role_id"
                rules={[
                    {
                        required: true,
                        message: '请输入角色',
                    },
                ]}
                initialValue={user===1?'':user.role_id}
            >
                <Select
                    placeholder="Select a option and change input text above"
                    // onChange={onGenderChange}
                    allowClear

                >
                    {
                        roles.map(role => <Option key={role._id} value={role._id}>{role.name}</Option>)
                    }
                </Select>
            </Form.Item>
        </Form>
    )
  }
export default UserForm
