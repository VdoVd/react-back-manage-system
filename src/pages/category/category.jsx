import React, {useEffect, useRef, useState} from "react";
import {Button, Card, Table, message, Modal} from "antd";
import {ArrowRightOutlined, PlusOutlined} from "@ant-design/icons";
import LinkButton from "../../components/button/button";
import {reqCategory, reqUpdateCategory} from "../../api";
import AddForm from "../../components/addForm/AddForm";
import UpdateForm from "../../components/updateForm/UpdateForm";


const Category=()=>{
    const [name,Setname]=useState('')
    const [id,SetId]=useState()
    const [curCategory,SetCurCategory]=useState()
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
                    <LinkButton onclick={(category)=>{
                        SetId(category._id)
                        showUpdate(category)
                    }}>修改分类</LinkButton>
                    <LinkButton onClick={()=>{showSubCategory(category)
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
    const [form,SetForm]=useState()
    const [text,SetText]=useState('未设置')
    const showModal = () => {
        setIsModalOpen(true);
    };
    const extra=(
        <Button type="primary" onClick={()=>{SetShowStatus(1)}}>
            <PlusOutlined />
            添加
        </Button>
    )
    useEffect(()=>{
        SetColmuns(columnsArray)
    },[parentId])
    const handleOk=()=> {
    }
    const buttonRef = useRef()
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
            console.log(categories.name,categories._id)
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
    const showUpdate=(category)=>{
        SetCurCategory(category)
        SetShowStatus(2)
        console.log()
    }
    const handleCancel=()=>{
        SetShowStatus(0)
    }
    const addCategory=()=>{
        console.log('addCategory()')
    }
    const updateCategory=async ()=>{
        const id=curCategory._id
        console.log(id,'id')
        console.log(text,'text')
        console.log(form,'form')
        SetShowStatus(0)
        const result=await reqUpdateCategory({id,text})
        console.log(result,'result')
        if(result.status===0){
            getCategorys(parentId)
        }
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
                    <LinkButton onClick={()=>{showUpdate(category)}}>修改分类</LinkButton>
                    <LinkButton onClick={()=>{showSubCategory(category)
                        console.log('linkbutton onclick-----',category)
                    }}>查看子分类</LinkButton>
                </span>
            )
        }
    ]
    const handleInput=(text)=>{
        Setname(text)
        console.log('handleInput','name',text)
    }
    console.log(text,'text')
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
                <UpdateForm  SetForm={SetForm} SetText={SetText}/>
            </Modal>
            <Modal title="删除分类" open={false} onOk={handleOk} onCancel={handleCancel}>
            </Modal>
        </Card>
    )
}
export default Category
