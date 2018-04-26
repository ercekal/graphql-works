
import React from 'react';
import { Container, Header, Input, Button } from 'semantic-ui-react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  onChange = e => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state,
    })
    console.log(response);
  }

  render () {
    const {onSubmit, onChange} = this
    const {username, password, email} = this.state
    return (
      <Container>
        <Header as='h2'>Register</Header>
        <Input name='username' onChange={onChange} placeholder='Username' fluid value={username}/>
        <Input name='email' onChange={onChange} placeholder='Email' fluid value={email}/>
        <Input name='password' onChange={onChange} placeholder='Password' type='password' fluid value={password}/>
        <Button onClick={(username && password && email)? onSubmit : null}>Submit</Button>
      </Container>
    )
  }
}

const registerMutation = gql`
  mutation($username: String!, $email:String!, $password:String!) {
    register(username: $username, email: $email, password: $password)
  }
`;

export default graphql(registerMutation)(Register);