import React, {useEffect, useState} from "react";
import {Button, Card, Table, message, Modal} from "antd";
import {ArrowRightOutlined, PlusOutlined} from "@ant-design/icons";
import LinkButton from "../../components/button/button";
import {reqCategory} from "../../api";
import AddForm from "../../components/addForm/AddForm";


const Category=()=>{

    const [colmuns,SetColmuns]=useState([
        {
            title: '分类的名称',
            dataIndex: 'name'
        },
        {
            title: '操作',
            width: '300px',
            render:(category)=>(
                <span>
                    <LinkButton>修改分类</LinkButton>
                    <LinkButton onClick={()=>{showSubCategory(category)
                        console.log('linkbutton onclick-----',category)
                    }}>查看子分类</LinkButton>
                </span>
            )
        }
    ])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [parentId,setparentId]=useState(0)
    const [parentName,SetParentName]=useState('')
    const [subCategory,SetSubCategory]=useState()
    const [categories,SetCatesgories]=useState([])
    const [showStatus,SetShowStatus]=useState(0)
    const showModal = () => {
        setIsModalOpen(true);
    };
    const extra=(
        <Button type="primary" onClick={()=>{SetShowStatus(1)}}>
            <PlusOutlined />
            添加
        </Button>
    )
    useEffect(()=>{})
    useEffect(()=>{
        SetColmuns(columnsArray)
    },[parentId])

    const handleOk=()=> {

    }

    const getCategorys=async (parentId)=>{
        const result=await reqCategory(parentId)
        // setLoading(false)
        if (result.status===0){
            const cate=result.data
            if(parentId==='0'){
                SetCatesgories(cate)
                // console.log('change category')
            }else {
                SetSubCategory(cate)
                console.log(cate)
                // console.log('sub change')
            }
        }else {
            message.error('获取分类列表失败')
        }
    }

    const showSubCategory=(categories)=>{
            setparentId(categories._id)
            SetParentName(categories.name)
            getCategorys(parentId)
    }
    useEffect(()=>{
        getCategorys(parentId)
    },[parentId])
    const title = parentId === '0' ? '一级分类列表' : (
        <span>
            <LinkButton onClick={()=>{showCategorys()}}>一级分类列表</LinkButton>
            <ArrowRightOutlined />
            <span>{parentName}</span>
        </span>
    )
    const showCategorys=()=>{
        setparentId('0')
        SetParentName('')
        SetSubCategory([])
    }
    const showAdd=()=>{
        SetShowStatus(1)
    }
    const showUpdate=()=>{

    }
    const handleCancel=()=>{
        SetShowStatus(0)
    }
    const addCategory=()=>{
        console.log('addCategory()')
    }
    const updateCategory=()=>{
        console.log('addCategory()')
    }
    const columnsArray=[
        {
            title: '分类的名称',
            dataIndex: 'name'
        },
        {
            title: '操作',
            width: '300px',
            render:(category)=>(
                <span>
                    <LinkButton>修改分类</LinkButton>
                    <LinkButton onClick={()=>{showSubCategory(category)
                        console.log('linkbutton onclick-----',category)
                    }}>查看子分类</LinkButton>
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
                dataSource={parentId === '0'?categories:subCategory}
                columns={colmuns}
                // loading={load}
                pagination={{defaultPageSize:5,showQuickJumper:true}}
            />
            <Modal title="添加分类" open={showStatus===1} onOk={addCategory} onCancel={handleCancel}>
                <AddForm />
            </Modal>
            <Modal title="更新分类" open={showStatus===2} onOk={updateCategory} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Modal title="删除分类" open={false} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </Card>
    )
}
export default Category
