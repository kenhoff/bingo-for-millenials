import React from "react";
import PropTypes from "prop-types";

class RoomInfo extends React.Component {
    render() {
        return (<div>
            {
                this.props.players.map((player) => {
                    return (<div key={player.socketID}>{player.name}</div>);
                })
            }
        </div>);
    }
}

export default RoomInfo;
