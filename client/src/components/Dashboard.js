import React from "react";
import Sidebar from "./Sidebar";

export default function Dashboard({id}) {

    return (
        // <div> {id} </div>
        // render out the Sidebar component:
        <Sidebar id={id}/>
    )
};