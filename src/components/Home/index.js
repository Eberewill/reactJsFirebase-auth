import React from "react";
import { compose } from "recompose";

import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import "./Home.css";

import { withAuthorization } from "../Session";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  render() {
    return (
      <div className="home--container">
        <h1>Welcome !</h1>
       
      </div>
    );
  }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
