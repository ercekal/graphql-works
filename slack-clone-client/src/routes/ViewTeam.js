
import React from 'react';
import Channels from '../components/Channels'
import Teams from '../components/Teams'
import Messages from '../components/Messages'
import SendMessage from '../components/SendMessage'
import Header from '../components/Header'
import AppLayout from '../components/AppLayout'

export default () => (
  <AppLayout>
    <Teams
      teams={[{ id: 1, letter: 'T' }, { id: 2, letter: 'E' }]}
    />
    <Channels
      teamName='Team Name'
      userName='Username'
      channels={[{id: 1, name: 'general'}, {id: 2, name: 'random'}]}
      users={[{id: 1, name: 'slackbot'}, {id: 2, name: 'user2'}]}
    />
    <Header channelName='general'/>
    <Messages>
      <ul class="message-list">
        <li></li>
        <li></li>
      </ul>
    </Messages>
    <SendMessage channelName='general'/>
  </AppLayout>
)
