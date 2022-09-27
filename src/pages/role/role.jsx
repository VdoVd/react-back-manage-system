import React, {useEffect, useState} from "react";
import {reqAddRole, reqRoles, reqUpdateRole} from "../../api";
import {Button, Card, message, Modal, Table} from "antd";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/sorageUtils";
import formatDat from '../../utils/dateUtils'
import {useNavigate} from "react-router-dom";
import {PAGE_SIZE} from "../../utils/contextUtils";
import AddRoleForm from "./add-form";
import AuthForm from "./auth-form";
const Role=()=>{
    const [roles,SetRoles]=useState()
    const [role,SetRole]=useState()
    const [isShowAdd,SetIsShowAdd]=useState(false)
    const [isShowAuth,SetIsShowAuth]=useState(false)
    const [columns,SetColumns]=useState()
    const [form,SetForm]=useState()
    const [auth,SetAuth]=useState()

    const getRoles=async () =>{
        const res=await reqRoles()
        if(res.status===0){
            SetRoles(res.data)
        }
    }
    const onRow=(role)=>{
        return{
            onclick:event=>{
                console.log('row onclick()',role)
                SetRole(role)
            }
        }
    }
    const addRole=async ()=>{
        form.validateFields(async (error,values)=>{
            if(!error){
                SetIsShowAdd(false)
            }
            const [roleName]=values
            form.resetFields()
            const res=await reqAddRole(roleName)
            if(res.satus===0){
                message.success('添加角色成功')
                const role=res.data
                SetRoles([...roles,role])
            }else {
                message.success('添加角色失败')
            }
        })
    }
    const navigetor=useNavigate()
    const updateRole=async ()=>{
        SetIsShowAuth(false)
        const menus=auth.current.getMenus()
        role.menus = menus
        role.auth_time = Date.now()
        role.auth_name = memoryUtils.user.username
        const result = await reqUpdateRole(role)
        if (result.status===0) {
            // this.getRoles()
            // 如果当前更新的是自己角色的权限, 强制退出
            if (role._id === memoryUtils.user.role_id) {
                memoryUtils.user = {}
                storageUtils.removeUser()
                navigetor('/login')
                message.success('当前用户角色权限成功')
            } else {
                message.success('设置角色权限成功')
            }
        }
    }
    useEffect(()=>{
        SetColumns([
            {
                title:'角色名称',
                dataIndex:'name'
            },
            {
                title: '创建时间',
                dataIndex: 'create_time',
                render:(create_time)=>formatDat(create_time)
            },
            {
                title: '授权时间',
                dataIndex: 'auth_time',
                render:formatDat
            },
            {
                title: '授权人',
                dataIndex: 'auth_name'
            }
        ])
        getRoles()
    },[])
    const title = (
        <span>
        <Button type='primary' onClick={() => SetIsShowAdd(true)}>创建角色</Button> &nbsp;&nbsp;
            <Button type='primary'  onClick={() => SetIsShowAuth(true)}>设置角色权限</Button>
      </span>
    )
    return(
        <Card title={title} >
            <Table
                columns={columns}
                dataSource={roles}
                bordered
                rowKey='_id'
                pagination={{defaultPageSize:PAGE_SIZE}}
            />;
            <Modal title="添加角色" open={isShowAdd} onOk={addRole} onCancel={()=>{
                SetIsShowAdd(false)
                form.resetFields()
            }}>
                <AddRoleForm
                    SetForm={SetForm}
                />
            </Modal>
            <Modal title="设置角色权限" open={isShowAuth} onOk={updateRole} onCancel={()=>{
                SetIsShowAuth(false)
            }}>
                <AuthForm
                    ref={auth}
                    role={role}
                    SetForm={SetForm}
                />
            </Modal>
        </Card>
    )
}
export default Role
