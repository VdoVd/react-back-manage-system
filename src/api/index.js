import ajax from "./ajax";
const BASE=''
export const  reLogin=(username,password)=>ajax(BASE+'/login',{username,password},'POST')

export const reqAddUser=(user)=>ajax(BASE +'/manage/user/add',user,'POST')
//获得一级/耳机分类的列表
export const reqCategory=(parentId)=>ajax(BASE+'/manage/category/list',{parentId})
export const reqCategorys = (parentId) => ajax(BASE + '/manage/category/list', {parentId})
export const reqAddCategory=(categoryName,parentId)=>ajax(BASE+'/manage/category/add',{categoryName,parentId},"POST")

export const reqUpdateCategory = ({categoryId, categoryName}) => ajax(BASE + '/manage/category/update', {categoryId, categoryName}, 'PUT')

export const reqProducts = (pageNum, pageSize) => ajax(BASE + '/manage/product/list', {pageNum, pageSize})

// 更新商品的状态(上架/下架)
export const reqUpdateStatus = (productId, status) => ajax(BASE + '/manage/product/updateStatus', {productId, status}, 'POST')

/*
搜索商品分页列表 (根据商品名称/商品描述)
searchType: 搜索的类型, productName/productDesc
 */
export const reqSearchProducts = ({pageNum, pageSize, searchName, searchType}) => ajax(BASE + '/manage/product/search', {
    pageNum,
    pageSize,
    [searchType]: searchName,
})

export const reqUsers = () => ajax(BASE + '/manage/user/list')
export const reqDeleteUser = (userId) => ajax(BASE + '/manage/user/delete', {userId}, 'POST')
// 添加/更新用户
export const reqAddOrUpdateUser = (user) => ajax(BASE + '/manage/user/'+(user._id ? 'update' : 'add'), user, 'POST')

export const reqRoles = () => ajax(BASE + '/manage/role/list')

export const reqAddRole = (roleName) => ajax(BASE + '/manage/role/add', {roleName}, 'POST')
// 添加角色
export const reqUpdateRole = (role) => ajax(BASE + '/manage/role/update', role, 'POST')
