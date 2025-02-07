import React from "react";

export default function Notification(props) {
    const notificationType = props.type;
    const notificationStyle = {
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        textAlign: "center"
    };
    //check the notification type and set the background color accordingly
    if (notificationType === 'error') {
        notificationStyle.backgroundColor = "red";
    } else {
        notificationStyle.backgroundColor = "green";
    }

    return (
        <div style={notificationStyle}>
            <h2>{props.message}</h2>
        </div>
    );
}

