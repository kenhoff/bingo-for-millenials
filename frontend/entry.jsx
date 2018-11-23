import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

const roomID = window.location.pathname.split("/")[1];
// todo: check if there's any other false conditions for roomID
if (!roomID) {
    ReactDOM.render(<h1>room not found</h1>, document.getElementById("app"));
} else {
    ReactDOM.render(<App roomID={roomID}/>, document.getElementById("app"));
}
