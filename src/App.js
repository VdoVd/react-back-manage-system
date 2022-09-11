import React,{Component} from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import 'antd/dist/antd.less'
class App extends Component{

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/' element={<Admin />}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
export default App;
