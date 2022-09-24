import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import ProductHome from "./home";
import ProductAddUpdate from './add-update'
import ProductDetail from './detail'
import './product.less'
const Product=()=>{
    return(
		<div className="overflow">
        <Routes>
			<Route path='/addupdate/:isUpdate/:product' element={<ProductAddUpdate />}/>
			<Route path='/detail/:product' element={<ProductDetail />}/>
			<Route path="/"  element={<ProductHome />}/>
		</Routes>
		</div>
    )
}
export default Product
