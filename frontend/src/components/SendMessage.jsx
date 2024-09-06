import React, { useState, useContext } from 'react'
import db from '../firebase/firebase.config';
import auth, { AuthContext } from '../contects/AuthProvider';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
//import photoURL from '../assets/Images/dummy-user.png';

const SendMessage = ({scroll}) => {
  const [msg, setMsg] = useState('');
 const { user } = useContext(AuthContext);

  async function sendMessage(e) {
    e.preventDefault();
   const { uid, email } = user;

    await addDoc(collection(db, 'messages'), {
      text: msg,
    // photoURL,
      uid,
      createdAt: serverTimestamp(),
      email
    });
    setMsg('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            style={{
              width: '78%',
              fontSize: '15px',
              fontWeight: '550',
              marginLeft: '5px',
              marginBottom: '-3px',
            }}
            placeholder="Type a message here..."
            type="text"
             value={msg}
             onChange={(e) => setMsg(e.target.value)}
          />
          <button
            style={{
              width: '18%',
              fontSize: '15px',
              fontWeight: '550',
              margin: '4px 5% -13px 5%',
              maxWidth: '200px',
              backgroundColor: 'aquamarine',
            }}
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default SendMessage