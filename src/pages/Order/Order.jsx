import React from "react";
import Son from "../../components/testComponents/Son";
import Parent from "./test";
import Father from "../../components/testComponents/Father";
const Order=(props)=>{
    const msg='oevin'
    const value='vibdr'

    return(
        <div>
            <Parent />
            <Father />
        </div>
    )
}
export default Order
