import React from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";
import RoomInfo from "./RoomInfo.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: []
        };
    }
    componentDidMount() {
        let socket = io.connect();
        socket.on("update-player-list", (playerList) => {
            console.log(playerList);
            this.setState({players: playerList});
        });
        socket.emit("join-room", this.props.roomID);
    }
    render() {
        return (<React.Fragment>
            <div>Bingo For Millenials</div>
            <div>
                <span>
                    {`bingoformillenials.app/${this.props.roomID}`}
                </span>
                <button>Invite friends</button>
            </div>
            <div>caller stuff</div>
            <div>board</div>
            <RoomInfo players={this.state.players}/>
        </React.Fragment>);
    }
}

App.propTypes = {
    roomID: PropTypes.string
};

export default App;
