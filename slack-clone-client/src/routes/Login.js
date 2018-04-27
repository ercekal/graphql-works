
import React from 'react';
import { observer } from 'mobx-react'
import { extendObservable } from 'mobx'
import { Container, Header, Input, Button, Message } from 'semantic-ui-react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default observer(class Login extends React.Component {
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

  onSubmit = () => {
    const {password, email} = this
    console.log(password, email);
    // const response = await this.props.mutate({
    //   variables: {username, password, email},
    // })
    // const {ok, errors} = response.data.register
    // console.log(response)
    // if (ok) {
    //   this.props.history.push('/')
    // } else {
    //   const err = {};
    //   errors.forEach(({ path, message }) => {
    //     err[`${path}Error`] = message;
    //   });
    //   console.log(err)
    //   this.setState(err)
    // }
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
});
