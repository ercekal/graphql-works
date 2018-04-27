
import React from 'react';
import { observer } from 'mobx-react'
import { extendObservable } from 'mobx'
import { Form, Container, Header, Input, Button, Message } from 'semantic-ui-react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Login extends React.Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      email: '',
      password: '',
      errors: {}
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
    const {ok, token, refreshToken, errors} = response.data.login
    if (ok) {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });
      this.errors = err;
    }
  }

  render () {
    const {onSubmit, onChange} = this
    const {password, email, errors: { passwordError, emailError }} = this
    const errorList = []
    if (passwordError) {
      errorList.push(passwordError)
    }
    if (emailError) {
      errorList.push(emailError)
    }

    return (
      <Container>
        <Header as='h2'>Login</Header>
        <Form>
          <Form.Field
            error={!!emailError}
            >
            <Input
              name='email'
              onChange={onChange}
              placeholder='Email'
              fluid
              value={email}/>
          </Form.Field>
          <Form.Field
            error={!!passwordError}
            >
            <Input
              name='password'
              onChange={onChange}
              placeholder='Password'
              type='password'
              fluid
              value={password}/>
          </Form.Field>
          <Button onClick={onSubmit}>Submit</Button>
          </Form>
          {errorList.length ? <Message
            error
            header='There was some errors with your submission'
            list={errorList}
          /> : null}
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