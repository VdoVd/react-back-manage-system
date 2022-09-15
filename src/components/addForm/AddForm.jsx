import {Form, Input, Select} from "antd";
import {Option} from "antd/es/mentions";
import Item from "antd/es/list/Item";

const AddForm=()=>{
    const [form]=Form.useForm()
    return(
       <Form form={form}>
           <Form.Item>

           <Select
               style={{width: "472px"}}
               placeholder="Select a option and change input text above"
           >
               <Option value='0'>一级分类</Option>
               <Option value='1'>电脑</Option>
               <Option value='2'>图书</Option>
           </Select>
           </Form.Item>
           <Form.Item>
               <Input placeholder='请输入分类名称'></Input>
           </Form.Item>
       </Form>
    )
}
export default AddForm
