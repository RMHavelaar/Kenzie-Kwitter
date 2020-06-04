import React, { Component } from 'react';
import spinner from '../../assets/images/spinner';

class loader extends Component {
  state = {};
  render() {
    return (
      <div class="loaderContainer">
        <div className="loader">
          <img src={spinner} />
        </div>
      </div>
    );
  }
}

export default loader;
export const Loader = () => <>LOADING.......</>;
