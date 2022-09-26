import {Form, Input, Tree} from "antd";
import {useEffect, useState} from "react";
import menuList from "../../config/menuConfig";
import Item from "antd/es/list/Item";

const AuthForm=(props)=>{
    const menus=props.role
    const {TreeNode}=Tree
    const [nextProps,SetNextProps]=useState()
    const [checkKays,SetKedKeys]=useState(menus)
    const getMenus=()=>checkKays
    const getTreeNodes=(menuList)=>{
        return menuList.reduce((pre,item)=>{
            pre.push(
                <TreeNode title={item.title} key={item.key}>
                    {item.children?getTreeNodes(item.children):null}
                </TreeNode>
            )
                return pre
        },[])
    }
    const onCheck=checkKays=>{
        console.log('onCheck',checkKays)
        SetKedKeys({checkKays})
    }
    useEffect(()=>{
        SetKedKeys(getTreeNodes(menuList))
    },[])
    useEffect(()=>{
        SetKedKeys(menus)
    },[nextProps])
    const role=props.role
    const formItemLayout = {
        labelCol: { span: 4 },  // 左侧label的宽度
        wrapperCol: { span: 15 }, // 右侧包裹的宽度
    }
    return(
        <div>
            <Form.Item label='角色名称' {...formItemLayout}>
                <Input value={role.name} disabled/>
            </Form.Item>
            <Tree
                checkable
                defaultExpandAll={true}
                checkedKeys={checkKays}
                onCheck={onCheck}
                />
            <TreeNode title="平台权限" key="all">
                {tree}
            </TreeNode>
        </div>
    )
}
