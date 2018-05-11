
import React from 'react';
import Channels from '../components/Channels'
import Teams from '../components/Teams'
import Messages from '../components/Messages'
import Input from '../components/Input'
import Header from '../components/Header'
import AppLayout from '../components/AppLayout'

export default () => (
  <AppLayout>
    <Teams>Teams</Teams>
    <Channels
      teamName='Team Name'
      userName='Username'
      channels={[{id: 1, name: 'general'}, {id: 2, name: 'random'}]}
      users={[{id: 1, name: 'slackbot'}, {id: 2, name: 'user2'}]}
    />
    <Header>Header</Header>
    <Messages>
      <ul class="message-list">
        <li></li>
        <li></li>
      </ul>
    </Messages>
    <Input>
      <input type="text" placeholder="CSS Grid Layout Module" />>
    </Input>
  </AppLayout>
)
