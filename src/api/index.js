import ajax from "./ajax";
const BASE=''
export const  reLogin=(username,password)=>ajax(BASE+'/login',{username,password},'POST')

export const reqAddUser=(user)=>ajax(BASE +'/manage/user/add',user,'POST')
//获得一级/耳机分类的列表

