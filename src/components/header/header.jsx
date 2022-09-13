import React from "react";
import './index.less'
import report from './img/reporter.webp'
const Head=()=> {
    const states={
        currentTime:Date.now()
    }
    return (
        <div className="header">
            <div className="header-top">
                <span>welcome,admin</span>
                <a>退出</a>
            </div>
            <div className="header-bottom">
                <div className="header-bottom-left">首页</div>
                <div className="header-bottom-right">
                    <span>2022-9-13 18:01:33</span>
                    <img src={report} alt='header'/>
                </div>
            </div>
        </div>
    )
}
export default Head
