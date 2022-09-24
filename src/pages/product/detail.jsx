import React from "react";
import {useLocation, useParams} from "react-router-dom";
import {Form} from "antd";
const ProductDetail=()=>{
    const params=useParams()
    console.log(params.product)
    const title = (
        <span>
       <span>商品详情</span>
      </span>
    )
    return(
        <div>detail</div>
    )
}
export default ProductDetail
