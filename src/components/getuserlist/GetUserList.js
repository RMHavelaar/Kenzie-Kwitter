import React, { Component } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getUserList, lookUpProfile } from '../../redux/actions';
import { Loader } from '../loader'

class GetUserList extends Component {
    state = { label: "", displayName: "" };
    componentDidMount() {
      this.props.getUserList()
    }

    handleSubmit = (event) => {
      let lookUp = this.state[0].label
      this.props.lookUpProfile(lookUp)
    }

render() { 
  console.log(this.props.usersList.users)
  if(this.props.usersList.length !== 0) {
    const list = this.props.usersList.users.map(user => ({label: user.username}))
    return(
  <Card bg="secondary" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Look up user</Card.Title>
    <Card.Text>
      <Typeahead
        id = "lookUpUser"
        onChange = {(selected) => {
          this.setState(selected)
        }}
        options = {list}
        selected = {this.state.label}
/>
    </Card.Text>
    <Button onClick={this.handleSubmit} variant="primary">Click to view</Button>
  </Card.Body>
</Card>
    )
  }else{
    return (<Loader></Loader>)
  }
}   
}

const mapStateToProps = (state) => ({
  usersList: state.users.usersList,
  loading: state.users.loading,
  error: state.users.error,
})

const mapDispatchToProps = {
  getUserList, lookUpProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(GetUserList)