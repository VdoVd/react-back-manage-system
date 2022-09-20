import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import ProductHome from "./home";
import ProductAddUpdate from './add-update'
import ProductDetail from './detail'
const Product=()=>{
    return(
		<div>
        <Routes>
			<Route path='/addupdate/:isUpdate' element={<ProductAddUpdate />}/>
			<Route path='/detail' element={<ProductDetail />}/>
			<Route path="/"  element={<ProductHome />}/>
		</Routes>
		</div>
    )
}
export default Product
