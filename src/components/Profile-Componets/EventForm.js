import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AuthContext } from '../context/AuthContext';
import "./style.css";


function SummaryModal({ eventName, location, date, time, invitedUsers, onClose }) {
    return (
        <div className="summary-modal-overlay">
            <div className="summary-modal-content">
                <h2> Event success create !</h2>
                <p>Event Name:<span className="response-text">{eventName} </span></p>
                <p>Location:<span className="response-text">{location} </span></p>
                <p>Date:<span className="response-text"> {date}</span></p>
                <p>Time: <span className="response-text"> {time}</span></p>
                <p>Invitee:<span className="response-text"> {invitedUsers}</span></p>
                <button id="btnOK" onClick={onClose}>OK</button>
            </div>
        </div>
    );
}


function SeeEventsModal({ events, onClose }) {
    return (
        <div className="see-events-modal-overlay">
            <div className="see-events-modal-content">
                <h2>My Events</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
                            <tr key={event._id}>
                                <td>{event.eventName}</td>
                                <td>{event.date}</td>
                                <td>{event.time}</td>
                                <td>{event.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button id="btnOK" onClick={onClose}>OK</button>
            </div>
        </div>
    );
}



function EventForm() {
    const [showModal, setShowModal] = useState(false);
    const [event, setEvent] = useState({});
    // eslint-disable-next-line no-unused-vars
    const [eventName, setEventName] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [location, setLocation] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [date, setDate] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [time, setTime] = useState("");
    const [invitedUsers, setInvitedUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [listOfUsers, setListOfUsers] = useState([]);
    const [createdEvent, setCreatedEvent] = useState(null);
    const [userEvents, setUserEvents] = useState([]);
    const [showSeeEventsModal, setShowSeeEventsModal] = useState(false);
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        console.log(auth.token);
        if (auth.token) {
            api
                .get('/users', {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                })
                .then(response => setListOfUsers(response.data));
        }
    }, [auth.token]);


    useEffect(() => {
        if (auth.token) {
            api.get("/events", {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            }).then(response => setUserEvents(response.data));
        }
    }, [auth.token]);


    function handleSubmit(e) {
        e.preventDefault();

        api.post("/createEvent", event).then((response) => {
            setCreatedEvent(response.data);
            navigate("/profile", {});
        });

        setSubmitted(true);
        setShowModal(true);
    }

    const handleReset = () => {
        setEventName("");
        setLocation("");
        setDate("");
        setTime("");
        setInvitedUsers("");
        setSubmitted(false);
    }

    const handleOk = () => {
        setSubmitted(false);
        setShowModal(false);
        setCreatedEvent(null);
    }

    function handleChange(e) {
        setEvent({
            ...event,
            [e.target.name]: e.target.value,
        });


    }
    return (
        <div>
            <div className="btn-modal-s2">
            {auth.token && !showModal && !submitted && (
                <button onClick={() => setShowModal(true)}>Schedule events</button>
            )}

            {auth.token && !showSeeEventsModal && !submitted && (
                <button onClick={() => setShowSeeEventsModal(true)}> My events</button>
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
                                    Event Name:
                                    <input type="text" name="eventName" onChange={handleChange} required />
                                </label>
                                <label>
                                    Location:
                                    <input type="text" name="location" onChange={handleChange} required />
                                </label>

                                <label>
                                    Date:
                                    <input type="date" name="date" onChange={handleChange} required />
                                </label>

                                <label>
                                    Time:
                                    <input type="time" name="time" onChange={handleChange} required />
                                </label>

                                <label>
                                    Invitees:
                                    <select name="invitedUsers" value={invitedUsers} onChange={handleChange}>
                                        <option value="">Select an invitee</option>
                                        {listOfUsers.map((user) => (
                                            <option key={user.userId} value={user.userId}>
                                                {user.fname}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <br />
                                <div className="button-container ">
                                    <button type="submit">Add event</button>
                                    <button type="button" onClick={handleReset}>Reset</button>
                                </div>
                            </form>
                        ) : (
                            <SummaryModal
                                eventName={createdEvent?.eventName}
                                location={createdEvent?.location}
                                date={createdEvent?.date}
                                time={createdEvent?.time}
                                invitedUsers={createdEvent?.invitedUsers}
                                onClose={handleOk}

                            />
                        )}
                    </div>
                </div>
            )}

            {showSeeEventsModal && (
                <SeeEventsModal events={userEvents} onClose={() => setShowSeeEventsModal(false)} />
            )}


        </div>
    );

}


export default EventForm;
