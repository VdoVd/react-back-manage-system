import React, {useEffect, useState} from "react";
import {Button, Card, Input, Select, Table,message} from "antd";
import {Option} from "antd/es/mentions";
import Icon from "antd/es/icon";
import LinkButton from "../../components/button/button";
import {reqCategorys, reqProducts, reqSearchProducts, reqUpdateStatus} from "../../api";
import {PAGE_SIZE} from "../../utils/contextUtils";
import {createSearchParams, useNavigate} from "react-router-dom";
const ProductHome=()=>{
    const [datasource,SetDatasource] = useState([])
    const [columns,SetColumns] =useState([])
    const [loading,SetLoading] =useState(false)
    const [pageNum,SetPageNum]=useState()
    const [total,SetTotal]=useState(0)
    const [products,SetProducts]=useState([])
    const [searchName,SetSearchName]=useState('')
    const [searchType,SetSearchType]=useState('productName')
    const title = (
        <span>
           <Select style={{width: 150}}>
               <Option value='1'>按名称搜索</Option>
               <Option value='2'>按描述搜索</Option>
           </Select>
            <Input placeholder="关键字" style={{width:150,margin: '0 15px'}}></Input>
            <Button type="primary">搜索</Button>
        </span>
    )
    const state ={total,products,loading,searchName,searchType}
    const getProducts = async (pageNum) => {
        SetPageNum(pageNum)// 保存pageNum, 让其它方法可以看到
        SetLoading(true)// 显示loading
        const {searchName, searchType} = state
        // 如果搜索关键字有值, 说明我们要做搜索分页
        let result
        if (searchName) {

            result = await reqSearchProducts({pageNum, pageSize: PAGE_SIZE, searchName, searchType})

        } else { // 一般分页请求
            console.log('未加载成功')
            result = await reqProducts(pageNum, PAGE_SIZE)
        }
        SetLoading(false) // 隐藏loading
        if (result.status === 0) {
            // 取出分页数据, 更新状态, 显示分页列表
            const {total, list} = result.data
            SetTotal(total)
            SetProducts(list)
        }
    }
    const  updateStatus = async (productId, status) => {
        const result = await reqUpdateStatus(productId, status)
        if(result.status===0) {
            message.success('更新商品成功')
            getProducts(pageNum)
        }
    }
    const history =  useNavigate ()
    const handleGoTo = (str) => {
        history( str)
    }

    useEffect(() => {
        SetColumns(
            [
                {
                    title: '商品名称',
                    dataIndex: 'name',
                },
                {
                    title: '商品描述',
                    dataIndex: 'desc',
                },
                {
                    title: '价格',
                    dataIndex: 'price',
                    render: (price) => '¥' + price  // 当前指定了对应的属性, 传入的是对应的属性值
                },
                {
                    width: 100,
                    title: '状态',
                    // dataIndex: 'status',
                    render: (product) => {
                        const {status, _id} = product
                        const newStatus = status===1 ? 2 : 1
                        return (
                            <span>
              <Button
                  type='primary'
                  onClick={() => updateStatus(_id, newStatus)}
              >
                {status===1 ? '下架' : '上架'}
              </Button>
              <span>{status===1 ? '在售' : '已下架'}</span>
            </span>
                        )
                    }
                },
                {
                    width: 100,
                    title: '操作',
                    render: (product) => {
                        return (
                            <span>
              {/*将product对象使用state传递给目标路由组件*/}
                                <LinkButton onClick={() =>handleGoTo('/detail/'+{})}>详情</LinkButton>
              <LinkButton onClick={() =>handleGoTo('/product/addupdate/'+1+'/'+product)}>修改</LinkButton>
            </span>
                        )
                    },
                }
            ]
        )
    },[])
    useEffect(()=>{
        getProducts(1)
    },[])
    const extra = (
        <Button type='primary' onClick={()=>handleGoTo('/product/addupdate/'+0+'/'+{} )}>
            <Icon type='plus'/>
            添加商品
        </Button>
    )
    return(
       <Card title={title} extra={extra}>
           <Table
               bordered
               rowKey='_id'
               loading={loading}
               dataSource={products}
               columns={columns}
               pagination={{
                   current: pageNum,
                   total,
                   defaultPageSize: PAGE_SIZE,
                   showQuickJumper: true,
                   onChange: getProducts
               }}
           />
       </Card>
    )
}
export default ProductHome
