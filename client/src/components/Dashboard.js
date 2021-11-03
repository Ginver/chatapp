import React from "react";
import Sidebar from "./Sidebar";

export default function Dashboard({ id }) {

    return (
        // <div> {id} </div>
        // render out the Sidebar component:
        <div className="d-flex" style={{ height: "100vh"}}>
            <Sidebar id={id}/>
        </div>

    )
};