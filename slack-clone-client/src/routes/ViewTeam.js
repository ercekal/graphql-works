
import React from 'react';
import Messages from '../components/Messages'
import SendMessage from '../components/SendMessage'
import Header from '../components/Header'
import Sidebar from '../containers/Sidebar'
import AppLayout from '../components/AppLayout'

export default () => (
  <AppLayout>
    <Sidebar currentTeamId={1}/>
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
