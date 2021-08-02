import React, { useState, useCallback, useEffect } from 'react'

import { GiftedChat,User } from 'react-native-gifted-chat'
import { Platform, View,Text } from 'react-native';

const Chat=()=> {
  
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        system: true,
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])
 
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
  }, [])
 
  return (
    <View style={{flex: 1,backgroundColor:"red"}}>
       <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    {/* <Text>testing</Text>
    <Text>testing</Text>  
    <Text>testing</Text>  
    <Text>testing</Text>  */}
  </View> 
  )
}
export default Chat