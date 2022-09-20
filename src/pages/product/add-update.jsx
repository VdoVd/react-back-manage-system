import React from "react";
import {Card} from "antd";
import LinkButton from "../../components/button/button";
import Icon from "antd/es/icon";
import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons";

const ProductAdd=(props)=>{
    const history=useNavigate()
    const params = useParams()
    const isUpdate = params.isUpdate
    const title = (
        <span>
        <LinkButton onClick={() => history('/product')}>
          <ArrowLeftOutlined />
        </LinkButton>
            {/*<span>添加商品</span>*/}
        <span>{isUpdate ? '修改商品' : '添加商品'}</span>
      </span>
    )
    return(
        <div>
            <Card title={title}>
        </Card>
        </div>
    )
}
export default ProductAdd
