import React from "react";

export default function Card(props) {
    const cardStyle = {
        border: "1px solid #ccc",
        padding: "20px",
        margin: "10px",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    };
    const { title, content } = props;
    return (
        <div style={cardStyle}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}