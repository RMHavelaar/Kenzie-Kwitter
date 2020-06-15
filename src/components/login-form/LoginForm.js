import React, { useState } from "react";
import PropTypes from "prop-types";
import { Loader } from "../loader";
import "./LoginForm.css";

export const LoginForm = ({ login, loginGoogle, loading, error }) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    event.target.reset();
    login(state);
    clear();
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  const clear = () => {
    setState({
      username: "",
      password: "",
    });
  };

  const startAuthentication = () => {
    const authWindow = window.open(
      "https://kwitter-api.herokuapp.com/auth/google/login",
      "_blank"
    );
    authWindow.window.opener.onmessage = (event) => {
      authWindow.close();
      if (!event || !event.data || !event.data.token) {
        return;
      }
      console.log(event.data)
      loginGoogle(event.data);
    };
  };

  return (
    <React.Fragment>
      <form id="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={state.username}
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
            placeholder="password"
            value={state.password}
            required
            onChange={handleChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary"
          id="login-button"
        >
          Login
          
        </button>
        <button onClick={startAuthentication}>Login using Google</button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  loginGoogle: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
};
