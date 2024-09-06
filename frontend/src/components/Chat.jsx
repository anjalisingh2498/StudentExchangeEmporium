import React, { useEffect, useState,useContext } from 'react'
import db from '../firebase/firebase.config';
import SendMessage from './SendMessage';
import { AuthContext } from '../contects/AuthProvider';
import {collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import './Chat.css'; 


const Chat = () => {
  const [messages, setMessages] = useState([])
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const messagesRef = collection(db, 'messages');
    const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(50));
    const date = new Date();

    onSnapshot(messagesQuery, (snapshot) => {
      const message = snapshot.docs.map(doc => doc.data());
      setMessages(message);
    });
  }, [])
  return (
    /*
    <div>
      <br></br>
      <br></br>
      <br></br>
      {messages.map(({ id, text, photoURL }) => (
        <div>
          <div key={id} className={`msg`}>
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        </div>
      ))}
      <SendMessage></SendMessage>
    </div>
    */
   
    <div className="pb-44 pt-20 containerWrap">
       <br></br>
      <br></br>
      <br></br>
    {messages.map(({ id, text, photoURL, uid, email }) => (
      <div>
        <div key={id} className={`msg ${user && uid === user.uid ? 'sent' : 'received'}`}>
          {/* <img src={photoURL} alt="" /> */}
          <div>{email}</div>
          <div className="chat-bubble">{text}</div>
        </div>
      </div>
    ))}
    <SendMessage></SendMessage>
  </div>

  )
}

export default Chat