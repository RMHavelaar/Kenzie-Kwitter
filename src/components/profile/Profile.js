import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Profile.css";
import defaultImage from "../../assets/images/EmptyProfilePic.png";
import dateFormat from "dateformat";
import FormData from "form-data";

class Profile extends Component {
  // TODO: add other params to state for componentDidUpdate
  constructor(props) {
    super(props);
    this.state = {
      picture: "",
    };
  }

  componentDidMount() {
    this.props.profile();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.picture, "cool");
    let formData = new FormData();
    formData.append("picture", this.state.picture);
    this.props.putPhoto(formData);
  };

  //   TODO: if statements for size less than 200000 and file types gif, jpeg or png
  handleOnChange = (event) => {
    event.preventDefault();
    console.log(event.target.files[0], "awesome");
    this.setState({
      picture: event.target.files[0],
    });
  };

  handleDelete = (event) => {
    event.preventDefault();
    this.props.deleteUser();
    alert("Your account has been successfully deleted");
    this.props.login();
  };

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
          <h3 className="card-title" id="title">
            Profile
          </h3>
          <img
            src={
              this.props.pictureLocation
                ? `https://kwitter-api.herokuapp.com${this.props.pictureLocation}`
                : defaultImage
            }
            className="card-img-top"
            alt="profile_image"
          />
          <form id="photo-form">
            <div id="photo-input">
              <input
                type="file"
                id="myFile"
                name="filename2"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="mt-3" id="photo-button">
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn btn-primary"
                id="upload-button"
              >
                Upload
              </button>
            </div>
          </form>
          <div className="card-body">
            <h6 className="card-title">Username: {this.props.username} </h6>
            <p className="card-text">
              Display Name:{" "}
              {this.props.displayName ? this.props.displayName : ""}
            </p>
            <p className="card-text">
              Bio:{" "}
              {this.props.about ? this.props.about : "You don't have a bio yet"}
            </p>
            <p className="card-text">
              Created on:{" "}
              {this.props.createdAt
                ? dateFormat(this.props.createdAt, "mmmm dS, yyyy")
                : ""}
            </p>
            <p className="card-text">
              Last Updated:{" "}
              {this.props.updatedAt
                ? dateFormat(this.props.updatedAt, "mmmm dS, yyyy")
                : ""}
            </p>
          </div>
          <button
            onClick={this.handleDelete}
            id="delete-button"
            type="button"
            className="btn btn-danger"
          >
            Delete Account
          </button>
        </div>
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.func.isRequired,
  putPhoto: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default Profile;
