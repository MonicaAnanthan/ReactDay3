import React, { useState } from "react";
import ChildComponent from "../ChildComponent";

export default function ParentComponent() {
    
    const [data, setData] = useState(' ');

    const parentToChild = () => {
        setData("This data is from Parent component to Child component")
    }

    return(
        <div className="container col-md-5 py-5 text-center">
            <h3 className="mb-4">Parent Component</h3>
            <ChildComponent parentToChild={data}/>
            <div>
                <button className="btn btn-primary my-3" onClick={() => parentToChild()}>Click Parent</button>
            </div>
        </div>
    );
}