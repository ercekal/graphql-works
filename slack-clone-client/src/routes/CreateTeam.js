
import React from 'react';
import { observer } from 'mobx-react'
import { extendObservable } from 'mobx'
import { Form, Container, Header, Input, Button, Message } from 'semantic-ui-react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CreateTeam extends React.Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      name: '',
      errors: {}
    })
  }

  onChange = e => {
    const {name, value} = e.target
    this[name] = value
  }

  onSubmit = async () => {
    const { name } = this
    const response = await this.props.mutate({
      variables: { name }
    })
    const {ok, errors} = response.data.createTeam
    console.log(response.data.createTeam);
    if (ok) {
      this.props.history.push('/')
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
    const {name, errors: { nameError }} = this
    const errorList = []
    if (nameError) {
      errorList.push(nameError)
    }

    return (
      <Container>
        <Header as='h2'>Create A Team</Header>
        <Form>
          <Form.Field
            error={!!nameError}
            >
            <Input
              name='name'
              onChange={onChange}
              placeholder='Name'
              type='name'
              fluid
              value={name}/>
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

const createTeamMutation = gql`
  mutation($name: String!) {
    createTeam(name: $name) {
      ok
      errors {
        path
        message
      }
    }
  }
`

export default graphql(createTeamMutation)(observer(CreateTeam));