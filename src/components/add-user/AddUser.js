import React, { useState } from "react";
import PropTypes from "prop-types";
import { Loader } from "../loader";
import "./AddUser.css";

export const AddUser = ({ addUser, loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const handleAddUser = (event) => {
    event.preventDefault();
    addUser(state);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <form id="add-user" onSubmit={handleAddUser}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={state.username}
            autoFocus
            required
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            value={state.displayName}
            autoFocus
            required
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            required
            onChange={handleChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" disabled={loading} className="btn btn-primary">
          Register
        </button>
      </form>

      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

AddUser.propTypes = {
  addUser: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};
