import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Profile.css";
import defaultImage from "../../assets/images/EmptyProfilePic.png";

class Profile extends Component {
  // TODO: add other params to state for componentDidUpdate
  // state = {
  //     displayName: "",
  // }

  componentDidMount() {
    this.props.profile();
  }

  // TODO: fix componentDidUpdate below
  // componentDidUpdate(prevProps) {
  //     if (prevProps.user !== this.props.user) {
  //         console.log(this.props.user)
  //     this.setState({displayName: this.props.user.user.displayName})
  //     }
  // }

  render() {
    return (
      <React.Fragment>
        <div className="card" id="profile-card">
          <h3 className="card-title" id="title">Profile</h3>
          <img
            src={defaultImage}
            className="card-img-top"
            alt="profile_image"
          />
          <div className="card-body">
            <h6 className="card-title">Username: {this.props.username} </h6>
            <p className="card-text">
              Display Name:{" "}
              {this.props.user.user ? this.props.user.user.displayName : ""}
            </p>
            <p className="card-text">
              Created on:{" "}
              {this.props.user.user ? this.props.user.user.createdAt : ""}
            </p>
            <p className="card-text">
              Last Updated:{" "}
              {this.props.user.user ? this.props.user.user.updatedAt : ""}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default Profile;
