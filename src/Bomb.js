import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    };
  }

  render(prop) {
    return (
      <div>
        {this.state.secondsLeft > 0
          ? `${this.state.secondsLeft} seconds left before I go boom!`
          : `Boom!`}
      </div>
    );
  }
}

export default Bomb;
