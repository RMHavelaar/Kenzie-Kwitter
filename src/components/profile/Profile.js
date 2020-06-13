import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Profile.css";
import defaultImage from "../../assets/images/EmptyProfilePic.png";
import dateFormat from "dateformat";
import FormData from "form-data";

class Profile extends Component {
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
    let formData = new FormData();
    formData.append("picture", this.state.picture);
    this.props.putPhoto(formData);
  };

  handleOnChange = (event) => {
    event.preventDefault();
    if (this.checkImageType(event) && this.checkImageSize(event)) {
      this.setState({
        picture: event.target.files[0],
      });
    }
  };

  checkImageSize = (event) => {
    let image = event.target.files[0];
    if (image.size > 200000) {
      alert("Image must be smaller than 200KB");
      return false;
    }
    return true;
  };

  checkImageType = (event) => {
    let image = event.target.files[0];
    if (
      image.type !== "image/png" &&
      image.type !== "image/jpeg" &&
      image.type !== "image/gif"
    ) {
      alert("File type must be png, jpeg, or gif");
      return false;
    }
    return true;
  };

  handleDelete = (event) => {
    event.preventDefault();
    this.props.deleteUser();
    alert("Your account has been successfully deleted");
    this.props.login();
  };

  render() {
    return (
      <React.Fragment>
        <div className="card" id="profile-card">
          <h3 className="card-title" id="title">
            <svg
              className="bi bi-person-circle"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
              <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
              />
            </svg>{" "}
            Profile
          </h3>
          <img
            src={
              this.props.pictureLocation
                ? `https://kwitter-api.herokuapp.com${this.props.pictureLocation}`
                : defaultImage
            }
            className="card-img-top"
            id="profile-image"
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
                Upload{" "}
                <svg
                  className="bi bi-camera"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5C7.343 5 5 6.343 5 8a4 4 0 0 1 4-4v1z" />
                  <path
                    fillRule="evenodd"
                    d="M14.333 3h-2.015A5.97 5.97 0 0 0 9 2a5.972 5.972 0 0 0-3.318 1H1.667C.747 3 0 3.746 0 4.667v6.666C0 12.253.746 13 1.667 13h4.015c.95.632 2.091 1 3.318 1a5.973 5.973 0 0 0 3.318-1h2.015c.92 0 1.667-.746 1.667-1.667V4.667C16 3.747 15.254 3 14.333 3zM1.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM9 13A5 5 0 1 0 9 3a5 5 0 0 0 0 10z"
                  />
                  <path d="M2 3a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z" />
                </svg>
              </button>
            </div>
          </form>
          <div className="card-body" id="card-info">
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
            Delete Account{" "}
            <svg
              className="bi bi-trash"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
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
