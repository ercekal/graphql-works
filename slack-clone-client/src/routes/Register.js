
import React from 'react';
import { Container, Header, Input, Button, Message } from 'semantic-ui-react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    usernameError: '',
    emailError: '',
    passwordError: ''
  }

  onChange = e => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  onSubmit = async () => {
    this.setState({
      usernameError: '',
      emailError: '',
      passwordError: ''
    })
    const {username, password, email} = this.state
    const response = await this.props.mutate({
      variables: {username, password, email},
    })
    const {ok, errors} = response.data.register
    console.log(response)
    if (ok) {
      this.props.history.push('/')
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });
      console.log(err)
      this.setState(err)
    }
  }

  render () {
    const {onSubmit, onChange} = this
    const {username, password, email, usernameError, passwordError, emailError} = this.state
    const errorList = []
    if (usernameError) {
      errorList.push(usernameError)
    }
    if (passwordError) {
      errorList.push(passwordError)
    }
    if (emailError) {
      errorList.push(emailError)
    }

    return (
      <Container>
        <Header as='h2'>Register</Header>
        <Input
          error={!!usernameError}
          name='username'
          onChange={onChange}
          placeholder='Username'
          value={username}
          fluid/>
        <Input
          error={!!emailError}
          name='email'
          onChange={onChange}
          placeholder='Email'
          fluid
          value={email}/>
        <Input
          error={!!passwordError}
          name='password'
          onChange={onChange}
          placeholder='Password'
          type='password'
          fluid
          value={password}/>
        {(usernameError || passwordError || emailError) ? <Message
          error
          header='There was some errors with your submission'
          list={errorList}
        /> : null}
        <Button onClick={(username && password && email)? onSubmit : null}>Submit</Button>
      </Container>
    )
  }
}

const registerMutation = gql`
  mutation($username: String!, $email:String!, $password:String!) {
    register(username: $username, email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(registerMutation)(Register);