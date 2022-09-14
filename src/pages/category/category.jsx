import React from "react";
import {Button, Card, Table} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import LinkButton from "../../components/button/button";
const Category=()=>{
    const title='一级分类列表'
    const extra=(
        <Button type="primary">
            <PlusOutlined />
            添加
        </Button>
    )
    const dataSource=[
        {   key:'1',
            name:'liuhaobin',
            age:32,
            address:'NewYork'
        },
        {
            key: '2',
            name:'kasi',
            age:42,
            address: 'China'
        }
        ]
    const columns=[
        {
            title: '分类的名称',
            dataIndex: 'name'
        },
        {
            title: '年龄',
            render:()=>(
                <span>
                    <LinkButton>修改分类</LinkButton>
                    <LinkButton>查看子分类</LinkButton>
                </span>
    )
        }
    ]
    return(
        <Card
            title={title}
            extra={extra}
        >
            <Table
                bordered
                dataSource={dataSource}
                columns={columns}/>
        </Card>
    )
}
export default Category
