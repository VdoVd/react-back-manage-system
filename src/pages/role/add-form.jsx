import {useForm} from "antd/es/form/Form";
import {Form, Input} from "antd";

const AddRoleForm=(props)=>{
    const [form]=useForm()
    props.SetForm(form)
    return(
        <Form form={form}>
            <Form.Item
            initialValue=''
            rules={[{ required: true, message: '角色名称必须输入!' }]}
                >
                <Input placeholder='请输入角色名称'/>
            </Form.Item>
        </Form>
    )
}
export default AddRoleForm
