import {Form, Input, Select} from "antd";
import {Option} from "antd/es/mentions";
import Item from "antd/es/list/Item";
import {useImperativeHandle, useState} from "react";

const UpdateForm=(props)=>{
    const [form]=Form.useForm()
    props.SetForm(form)
    return(
        <Form form={form} onFieldsChange={(v)=>{props.SetText(v[0].value)}}>
            <Form.Item name="text">
                <Input placeholder={props.name}></Input>
            </Form.Item>
        </Form>
    )
}
export default UpdateForm
