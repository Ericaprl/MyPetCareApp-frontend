import React, { useState, useEffect, useContext,useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AuthContext } from '../context/AuthContext';

import "./style.css";

function SummaryModal ({title, addressees, message, onClose}) {

  return(
<div className="summary-modal-overlay">
            <div className="summary-modal-content">
            <h2> Message success send!</h2>
                <p>Title:<span className="response-text">{title} </span></p>
                <p>To:<span className="response-text">{addressees} </span></p>
                <p>Message:<span className="response-text"> {message}</span></p>
                <button id="btnOK" onClick={onClose}>OK</button>
            </div>
        </div>
    );

}


function Chat() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [addressees, setAddressees] = useState("");
  const [message, setMessage] = useState("");
  const [createdChat, setCreatedChat] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showSeeChatsModal, setShowSeeChatsModal] = useState(false);
  const [userChats, setUserChats] = useState([]);


  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

 

  const fetchUsers = useCallback(async () => {
    try {
      const response = await api.get('/users', {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setListOfUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }, [auth.token]);

  const fetchReceivedMessages = useCallback(async () => {
    try {
      const response = await api.get('/chats', {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setUserChats(response.data);
    } catch (error) {
      console.error('Error fetching received messages:', error);
    }
  }, [auth.token]);

  useEffect(() => {
    if (auth.token) {
      fetchUsers();
      fetchReceivedMessages();
    }
  }, [auth.token,fetchUsers,fetchReceivedMessages]);

  const handleOk = () => {
    setSubmitted(false);
    setShowModal(false);
    setCreatedChat(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChat = {
      title,
      addressees: [addressees], 
      message,
    };
    api.post("/createChat", newChat)
      .then((response) => {
        setCreatedChat(response.data);
        navigate("/profile", {});
      })
      .catch((error) => {
        console.error("Error creating chat:", error);
      });
    setSubmitted(true);
    setShowModal(true);
  };

  const handleReset = () => {
    setTitle("");
    setAddressees("");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <div>
      <div className="btn-modal-s2">
        {auth.token && !showModal && !submitted && (
          <button onClick={() => setShowModal(true)}>Talk with another pet owner</button>
        )}

        {auth.token && !showSeeChatsModal && !submitted && (
          <button onClick={() => setShowSeeChatsModal(true)}>My Chats</button>
        )}
      </div>

      {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close-btn"
                            onClick={() => setShowModal(false)}>
                            X
                        </span>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <label>
                Title:
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </label>
              <label>
                To:
                <select name="addressees" value={addressees} onChange={(e) => setAddressees(e.target.value)} required>
                  <option value="">Pet owners</option>
                  {listOfUsers.map((user) => (
                    <option key={user.userId} value={user.userId}>
                      {user.fname}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Message:
                <textarea type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
              </label>
              <br />
              <div className="button-container">
                <button type="submit">Send message</button>
                <button type="button" onClick={handleReset}>Reset</button>
              </div>
            </form>
        
            ) : (
              <SummaryModal
                  title={createdChat?.title}
                  addressees={createdChat?.addressees}
                  message={createdChat?.message}
                  onClose={handleOk}

              />
          )}
          
          </div>
      </div>
    )}

      {showSeeChatsModal && (
          <div className="see-chats-modal-overlay">
            <div className="see-chats-modal-content">
              <h2>My Messages</h2>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>To</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {userChats.map((chat) => (
                    <tr key={chat._id}>
                      <td>{chat.title}</td>
                      <td>{chat.addressees}</td>
                      <td>{chat.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button id="btnOK" onClick={() => setShowSeeChatsModal(false)}>OK</button>
            </div>
          </div>
       
      )}
    </div>
  );
}

export default Chat;
