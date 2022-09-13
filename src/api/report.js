import jsonp from 'jsonp'
import ajax from "./ajax";
import {message} from "antd";

const BASE=''

export const  reLogin=(username,password)=>ajax(BASE+'/login',{username,password},'POST')
export const reqAddUser=(user)=>ajax(BASE+'/manage/user/add',user,'POST')

export const reqWeather=()=> {
    return new Promise((resolve, reject)=>{
        const url='https://devapi.qweather.com/v7/weather/now?location=101010100&key=321f5d7f1a2d494eb6cf56cdfd9027c7'
        jsonp(url,{},(err,data)=>{
            console.log('jsonp()',err,data)
            if(!err&&data.status==='200'){
                const {obsTime,text}=data.now
                resolve(obsTime,text)
            }else {
                message.error('获取天气信息失败')
            }
        })
    })

}
