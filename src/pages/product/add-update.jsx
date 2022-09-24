import React, {useEffect, useState} from "react";
import {Button, Card, Cascader, Form, Input, Modal,  Upload} from "antd";
import LinkButton from "../../components/button/button";
import { useNavigate, useParams} from "react-router-dom";
import {ArrowLeftOutlined, PlusOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {reqCategorys} from "../../api";
const ProductAdd = (props) => {
    const history = useNavigate()
    const params = useParams()
    const [form] =Form.useForm()
    const [isUpdate,product] = params.isUpdate
    console.log(isUpdate, 'isUpdate',product,'product',params,'params')
    const [previewOpen, setPreviewOpen] = useState(false)
    const [previewImage, setPreviewImage] = useState('')
    const [previewTitle, setPreviewTitle] = useState('')
    const [categories,Setcategories] = useState()
    const [values,SetValues] =useState()
    const [options,SetOption]=useState()
    const handleCancel= () => setPreviewOpen(false)
    const getBase64 = (file) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => resolve(reader.result);

            reader.onerror = (error) => reject(error);
        })
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }
    ])
    const getOptions=()=>{

    }
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    }
    const handleChange = ({fileList: newFileList}) => setFileList(newFileList)
    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    const submit =async ()=>{
        const value = await form.validateFields()
        console.log(value,'value')
        const {name, desc, price, categoryIds} = values
        let pCategoryId, categoryId

    }
    const initOptions = async (categorys) => {
        console.log(categorys,'init categories')
        let o = categorys.map(c => ({
            value: c._id,
            label: c.name,

        }))
        console.log('initoptions',o)
        SetOption(o)
    }
    const getCategories = async (parentId) => {
        const res =await  reqCategorys(parentId)
        if (res.status === 0){
            const categorys = res.data
            if(parentId==='0'){
                console.log('categories===0',categorys)
                await initOptions(categorys)
                console.log('options',options)
            }else {
                return categorys
                console.log('categories!==0',categorys)
            }
        }}
    const title = (
        <span>
            <LinkButton onClick={() => history('/product')}>
              <ArrowLeftOutlined/>
                {/*<span>添加商品</span>*/}
                <span>{isUpdate === '1' ? '修改商品' : '添加商品'}</span>
            </LinkButton>
          </span>
    )
    useEffect(()=>{
        getCategories('0')
    },[])
    return (
        <div id="addId">
            <Card title={title}>
                <Form form={form}>
                    <Form.Item label="商品名称" name="name" rules={[{required: true, message: 'need input'}]}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="商品描述" name="desc" rules={[{required: true, message: 'need input'}]}>
                        <TextArea rows={4}/>
                    </Form.Item>
                    < Form.Item label="商品价格" name="price" rules={[{required: true, message: 'need input'}]}>
                        {
                            (<Input type='number' placeholder='请输入商品价格' addonAfter='元'/>)
                        }
                    </Form.Item>
                    <Form.Item label="商品分类" name="category" rules={[{required: true, message: 'need input'}]}>
                        <Cascader placeholder='请指定商品分类' options={options} />
                    </Form.Item>
                    <Form.Item label="商品图片" name="photo" >
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                            <img
                                alt="example"
                                style={{
                                    width: '100%',
                                }}
                                src={previewImage}
                            />
                        </Modal>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" onClick={submit}>提交</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )

};
export default ProductAdd
