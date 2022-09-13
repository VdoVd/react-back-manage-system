import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import 'antd/dist/antd.less'
// import Home from "./pages/home/home";
// import User from "./pages/User/User";
const App=()=> (
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<Admin />}>
                    </Route>
                    <Route path='login' element={<Login />}>
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </BrowserRouter>
)
export default App;
