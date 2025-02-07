import React from "react";

export default function UserProfile(props) {
    const profileStyle = {
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        textAlign: "center"
    };

    return (
        <div style={profileStyle}>
            <h2>{props.username}</h2>
            <img src={props.avatarURL} alt={`${props.username}'s avatar`} style={{ borderRadius: "50%", width: "100px", height: "100px" }} />
        </div>
    );
}