import React, { Component } from "react";
import PropTypes from "prop-types";
import "./GetUserList.css";
import defaultImage from "../../assets/images/EmptyProfilePic.png";
// import { Loader } from '../loader'

class GetUserList extends Component {
  state = { usersList: [] };

  // componentDidMount() {
  //   this.props.getUserList()
  // }

  handleLoadUsers = (event) => {
    this.props.getUserList();
  };

  render() {
    let users = this.props.usersList.users;
    return (
      <React.Fragment>
        <button type="submit" className="btn btn-primary" id="load-button" onClick={this.handleLoadUsers}>Load users</button>
        <h3 id="list-title">User List</h3>
        {users.map((user) => (
            <div key={user.username} className="card" id="profile-card">
              <img
                src={
                  user.pictureLocation
                    ? `https://kwitter-api.herokuapp.com${user.pictureLocation}`
                    : defaultImage
                }
                className="card-img-top"
                id="profile-image"
                alt="profile_image"
              />
              <div className="card-body" id="card-info">
                <h6 className="card-title">Username: {user.username} </h6>
                <p className="card-text">
                  Display Name:
                  {user.displayName}
                </p>
              </div>
            </div>
          ))};
      </React.Fragment>
    );
  }
}

GetUserList.propTypes = {
  getUserList: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default GetUserList;
