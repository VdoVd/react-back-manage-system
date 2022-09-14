import React, {useEffect, useState} from "react";
import './index.less'
import formatDate from '../../utils/dateUtils'
import report from './img/reporter.webp'
import memoryUtils from "../../utils/memoryUtils";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import menuList from "../../config/menuConfig";
import {Button,Modal, Space} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import storageUtils from "../../utils/sorageUtils";
import LinkButton from "../button/button";
const { confirm } = Modal;
const Head=()=> {
    const [currentTime,setCurrentTime]=useState(Date.now())
    const [title,setTitle]=useState('首页')
    const user=memoryUtils.user.username
    const location=useLocation()
    const value=location.pathname
    useEffect(()=>{
        let title=''
        menuList.forEach((item)=>{
            if(item.key===value){
                title=item.title
            }else if(item.children){
                item.children.forEach((n)=>{
                    if(n.key===value){
                        title=n.title
                    }
                })
            }else {
                console.log('error',item.key)
            }
        })
        setTitle(title)
    },[value])

    const getTime=()=>{
        setInterval(()=>{
            const time=formatDate(Date.now())
            setCurrentTime(time)
        },1000)
    }
    getTime()
    const history =  useNavigate ()
    const handleGoTo = () => {
        history('/login')
    }
    const showConfirm = () => {
        confirm({
            title: '你确定退出吗?',
            icon: <ExclamationCircleOutlined />,
            content: '',
            cancelText: '取消',
            okText: '确定',
            onOk:()=> {

                console.log('确定');
                storageUtils.removeUser()
                memoryUtils.user={}
                handleGoTo()
            },

            onCancel() {
                console.log('取消');
            },
        });
    }
    return (
        <div className="header">
            <div className="header-top" >
                <span>welcome    {user}</span>
                <Space wrap>
                    <LinkButton onClick={showConfirm} >退出</LinkButton>
                </Space>
            </div>
            <div className="header-bottom">
                <div className="header-bottom-left">{title}</div>
                <div className="header-bottom-right">
                    <span>{currentTime}</span>
                    <img src={report} alt='header'/>
                </div>
            </div>
        </div>
    )
}
export default Head
