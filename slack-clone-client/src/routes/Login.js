
import React from 'react';
import { observer } from 'mobx-react'
import { extendObservable } from 'mobx'
import { Container, Header, Input, Button, Message } from 'semantic-ui-react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Login extends React.Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      email: '',
      password: ''
    })
  }

  onChange = e => {
    const {name, value} = e.target
    this[name] = value
  }

  onSubmit = async () => {
    const {password, email} = this
    const response = await this.props.mutate({
      variables: { email, password }
    })
    console.log(response)
    const {ok, token, refreshToken, errors} = response.data.login
    if (ok) {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
    } else {
      const err = {};
      console.log(err)
    }
  }

  render () {
    const {onSubmit, onChange} = this
    const {password, email} = this
    return (
      <Container>
        <Header as='h2'>Login</Header>
        <Input
          name='email'
          onChange={onChange}
          placeholder='Email'
          fluid
          value={email}/>
        <Input
          name='password'
          onChange={onChange}
          placeholder='Password'
          type='password'
          fluid
          value={password}/>
        <Button onClick={onSubmit}>Submit</Button>
      </Container>
    )
  }
};

const loginMutation = gql`
mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    ok
    token
    refreshToken
    errors {
      path
      message
    }
  }
}
`

export default graphql(loginMutation)(observer(Login));