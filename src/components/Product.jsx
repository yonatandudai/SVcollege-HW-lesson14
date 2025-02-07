import React from "react";

export default function Product(props) {
    const productStyle = {
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        textAlign: "center"
    };

    return (
        <div style={productStyle}>
            <h2>{props.name}- {props.price}</h2>
        </div>
    );
}