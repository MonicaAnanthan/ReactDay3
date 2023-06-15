import React from "react";

export default function ChildComponent(props) {
    return(
        <div>
            <h5 style={{color:"#de3848", fontWeight:"500"}}>{props.parentToChild}</h5>
        </div>
    );
}