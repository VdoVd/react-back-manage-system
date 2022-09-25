import React, {useEffect, useState} from "react";
import LinkButton from "../../components/button/button";
import {Modal, message, Button, Card, Table} from "antd";
import {reqAddOrUpdateUser, reqDeleteUser, reqUsers} from "../../api";
import formatDate from "../../utils/dateUtils";
import UserForm from "./user-form";

const User=()=>{
    const [users,SetUsers]=useState([])
    const [user,SetUser]=useState()
    const [roles,SerRoles]=useState([])
    const [isShow,SetIsShow]=useState(false)
    const [form,setForm]=useState()
    const [roleNames,SetRoleNames]=useState()
    const [id,SetId]=useState(-1)
    const initRoleNames = (roles) => {
        const roleNames = roles.reduce((pre, role) => {
            pre[role._id] = role.name
            return pre
        }, {})
        // 保存
        SetRoleNames(roleNames)
    }

    /*
    显示添加界面
     */
   const showAdd = () => {
        SetUser(null)
        SetIsShow(true)
    }

    /*
    显示修改界面
     */
    const showUpdate = (user) => {
        SetUser(user)
        SetIsShow(true)
    }

    /*
    删除指定用户
     */
    const deleteUser = (user) => {
        Modal.confirm({
            title: `确认删除${user.username}吗?`,
            onOk: async () => {
                const result = await reqDeleteUser(user._id)
                if(result.status===0) {
                    message.success('删除用户成功!')
                    getUsers()
                }
            }
        })
    }

    /*
    添加/更新用户
     */
    const addOrUpdateUser = async () => {

        SetIsShow(false)

        // 1. 收集输入数据
        const u = form.getFieldsValue()
        console.log(u,'user')
        form.resetFields()
        // 如果是更新, 需要给user指定_id属性
        // 2. 提交添加的请求
        let result
        if(user){
            user._id=id
             result = await reqAddOrUpdateUser(user)
        }else {
             result = await reqAddOrUpdateUser(u)
        }
        // 3. 更新列表显示
        if(result.status===0) {
            message.success(`${user ? '修改' : '添加'}用户成功`)
            getUsers()
        }
    }

    const getUsers = async () => {
        const result = await reqUsers()
        if (result.status===0) {
            const {users, roles} = result.data
            initRoleNames(roles)
           SetUsers(users)
            SerRoles(roles)
        }
    }
    const columns=[
        {
            title: '用户名',
            dataIndex: 'username'
        },
        {
            title: '邮箱',
            dataIndex: 'email'
        },

        {
            title: '电话',
            dataIndex: 'phone'
        },
        {
            title: '注册时间',
            dataIndex: 'create_time',
            render: formatDate
        },
        {
            title: '所属角色',
            dataIndex: 'role_id',
            render: (role_id) => roleNames[role_id]
        },
        {
            title: '操作',
            render: (user) => (
                <span>
            <LinkButton onClick={() =>{
                showUpdate(user)
                SetId(user._id)
                console.log(user,'user')
            }}>修改</LinkButton>
            <LinkButton onClick={() =>deleteUser(user)}>删除</LinkButton>
          </span>
            )
        },
    ]
    useEffect(()=>{
        getUsers()
    },[])
    const title = <Button type='primary' onClick={showAdd}>创建用户</Button>
    return(
        <Card title={title}>
            <Table
                bordered
                rowKey='_id'
                dataSource={users}
                columns={columns}
                pagination={{defaultPageSize: 2}}
            />

            <Modal title={id<0?'创建用户':'修改用户'} open={isShow} onOk={addOrUpdateUser} onCancel={()=>{
                form.resetFields()
                SetIsShow(false)
            }}>
                <UserForm
                    setForm={setForm}
                    roles={roles}
                    user={user}
                />
            </Modal>

        </Card>
    )
}
export default User
