import {Button, Col, Row} from "antd";
import {useNavigate} from "react-router-dom";

const NotFound=()=>{
    const navigetor=useNavigate()
    return(
        <Row className="not-found">
            <Col span={12} className='left'></Col>
            <Col span={12} className='right'>
                <h1>404</h1>
                <h2>抱歉，你访问的页面不存在</h2>
                <div>
                    <Button type='primary' onClick={()=>navigetor('/home')}>
                        回到首页
                    </Button>
                </div>
            </Col>
        </Row>
    )
}
export default NotFound
