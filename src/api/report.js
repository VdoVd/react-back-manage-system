import jsonp from 'jsonp'
import ajax from "./ajax";
import {message} from "antd";

const BASE=''

export const  reLogin=(username,password)=>ajax(BASE+'/login',{username,password},'POST')
export const reqAddUser=(user)=>ajax(BASE+'/manage/user/add',user,'POST')

export const reqWeather=()=> {
    return new Promise((resolve, reject)=>{
        const url='https://api.map.baidu.com/weather/v1/?district_id=222405&data_type=all&ak=Km6HszSrDtjg4DZ2nxnYDC30dhc4wGaV'
        jsonp(url,{},(err,data)=>{
            console.log('jsonp()',err,data)
            if(!err&&data.status===0){
                const text=data.result.now.text
                resolve(text)
            }else {
                message.error('获取天气信息失败')
            }
        })
    })

}
export default reqWeather()
