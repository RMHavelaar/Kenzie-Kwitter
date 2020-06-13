import React, { Component } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getUserList } from '../../redux/actions';

class GetUserList extends Component {
    state = { userName: "", displayName: "" };
    componentDidMount() {
      getUserList()
    }
render() {  
    return(
  <Card bg="secondary" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Look up user</Card.Title>
    <Card.Text>
      <Typeahead
/>
    </Card.Text>
    <Button variant="primary">Click to view</Button>
  </Card.Body>
</Card>
    )
  }   
}

const mapStateToProps = (state) => ({
  users: state.users.usersList,
  loading: state.users.loading,
  error: state.users.error,
})

const mapDispatchToProps = {
  getUserList
}

export default connect(mapStateToProps, mapDispatchToProps)(GetUserList)