import Son from "./Son";
import {Form, Input} from "antd";
import {useState} from "react";
const Farther = () => {
    const msg = "大家好呀";
    const value = "I'm JavaScript";
    const [form]=Form.useForm()
    const [text,SetText]=useState('')
    const print=(values)=>{
        console.log(form.getFieldsValue().test)
    }
    // const onFinish = (values) => {
    //     console.log( values.username,values.text);
    // };

    return (
        <div>
            <span>我是父亲组件</span>
            <Son msg={msg} value={value}/>
            <Form form={form}
                  onFieldsChange={print}
            >
                <Form.Item name="test">
                <Input onChange={print} name='input'></Input>
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </div>
    )
}
export default Farther
