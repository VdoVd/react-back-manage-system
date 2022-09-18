import {Form, Input, Select} from "antd";
import {Option} from "antd/es/mentions";
import Item from "antd/es/list/Item";

const AddForm=(props)=>{
    const [form]=Form.useForm()
    console.log(props.categories,'categories')
    props.SetForm(form)
    console.log(form.getFieldsValue(),'addForm')
    return(
       <Form form={form}>
           <Form.Item name="Id">
           <Select
               style={{width: "472px"}}
               placeholder=""
           >
               <Option value='0'>一级分类</Option>
               {
                   props.categories.map(c=><Option value={c._id}>{c.name}</Option>)
               }
           </Select>
           </Form.Item>
           <Form.Item
               name="text"
            initialValue=''
           >
               <Input placeholder='请输入分类名称'></Input>
           </Form.Item>
       </Form>
    )
}
export default AddForm
