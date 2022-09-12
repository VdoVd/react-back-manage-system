import axios from 'axios'
import {message} from "antd";

export default function ajax(url,data={},type='GET'){
    return new Promise((resolve,reject)=>{
        let promise
        if(type==='GET'){
            promise= axios.get(url,{
                params: data
            })
        }else {
            promise=  axios.post(url,data)
        }
        promise.then(response=>{
            resolve(response.data)
        }).catch(error=>{
            message.error('请求出戳了:',error.message)
        })
    })

}
// ajax('/login',{username: 'Tom',password: '12345'}, 'POST').then()
//
// ajax('/manager')