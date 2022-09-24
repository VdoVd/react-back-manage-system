import React from 'react'
import {
  Form,
  Select,
  Input
} from 'antd'
import {useForm} from "antd/es/form/Form";

const Item = Form.Item
const Option = Select.Option

/*
添加/修改用户的form组件
 */
const UserForm=(props)=>  {
    const [form]=useForm()
    props.setForm(form)
    const {roles, user} =props
    const { getFieldDecorator } =props.form
    // 指定Item布局的配置对象
    const formItemLayout = {
      labelCol: { span: 4 },  // 左侧label的宽度
      wrapperCol: { span: 15 }, // 右侧包裹的宽度
    }

    return (
      <Form form={form}>
        <Item label='用户名'>
          {
            getFieldDecorator('username', {
              initialValue: user.username,
            })(
              <Input placeholder='请输入用户名'/>
            )
          }
        </Item>

        {
          user._id ? null : (
            <Item label='密码'>
              {
                getFieldDecorator('password', {
                  initialValue: user.password,
                })(
                  <Input type='password' placeholder='请输入密码'/>
                )
              }
            </Item>
          )
        }

        <Item label='手机号'>
          {
            getFieldDecorator('phone', {
              initialValue: user.phone,
            })(
              <Input placeholder='请输入手机号'/>
            )
          }
        </Item>
        <Item label='邮箱'>
          {
            getFieldDecorator('email', {
              initialValue: user.email,
            })(
              <Input placeholder='请输入邮箱'/>
            )
          }
        </Item>

        <Item label='角色'>
          {
            getFieldDecorator('role_id', {
              initialValue: user.role_id,
            })(
              <Select>
                {
                  roles.map(role => <Option key={role._id} value={role._id}>{role.name}</Option>)
                }
              </Select>
            )
          }
        </Item>
      </Form>
    )
  }
export default UserForm
