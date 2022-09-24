import React, {useState} from "react";
import Son from "../../components/testComponents/Son";
import Parent from "./test";
import Father from "../../components/testComponents/Father";
import {Button, Card, Form, Input, Modal, Select, Upload} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useNavigate, useParams} from "react-router-dom";
import {ArrowLeftOutlined, PlusOutlined} from "@ant-design/icons";
import LinkButton from "../../components/button/button";
const Order=(props)=>{
    const msg='oevin'
    const value='vibdr'
    const history = useNavigate()
    const params = useParams()
    const isUpdate = params.isUpdate
    console.log(isUpdate, 'isUpdate')
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const handleCancel = () => setPreviewOpen(false);
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => resolve(reader.result);

            reader.onerror = (error) => reject(error);
        });
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }
    ]);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({fileList: newFileList}) => setFileList(newFileList);
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
    const submit =()=>{

    }
    const title = (
        <span>
        <LinkButton onClick={() => history('/product')}>
          <ArrowLeftOutlined/>
            {/*<span>添加商品</span>*/}
            <span>{isUpdate === 1 ? '修改商品' : '添加商品'}</span>
        </LinkButton>
      </span>
    )
    return(
        <div>
            <div>
                <Card title={title}>
                    <Form>
                        <Form.Item label="商品名称">
                            <Input></Input>
                        </Form.Item>
                        <Form.Item label="商品描述">
                            <TextArea rows={4}/>
                        </Form.Item>
                        < Form.Item label="商品价格">
                            {
                                (<Input type='number' placeholder='请输入商品价格' addonAfter='元'/>)
                            }
                        </Form.Item>
                        <Form.Item label="商品分类">
                            <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="商品分类">
                            <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="商品分类">
                            <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="商品分类">
                            <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="商品图片">
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
                        <Form.Item label="商品图片">
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
                        <Form.Item label="商品图片">
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
                        <Form.Item label="商品图片">
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

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={submit}></Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    )
}
export default Order
