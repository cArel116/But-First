import React, { useContext, useEffect, useState } from "react"
// import { LocationContext } from "../location/LocationProvider"
import { EventContext } from "./EventProvider"
// import "./Event.css"
import { useHistory, useParams } from 'react-router-dom';

export const EventForm = () => {
    const { addEvent, getEventById, updateEvent } = useContext(EventContext)
    // const { locations, getLocations } = useContext(LocationContext)

    //for edit, hold on to state of event in this view
    const [event, setEvent] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { eventId } = useParams();
    const history = useHistory();

    // const [startDate, setStartDate] = useState(new Date());


    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (e) => {

        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newEvent = { ...event }
        //event is an object with properties. 
        //set the property to the new value
        newEvent[e.target.name] = e.target.value
        //update state
        setEvent(newEvent)
    }

    // Get customers and locations. If eventId is in the URL, getEventById
    useEffect(() => {
        if (eventId) {
            getEventById(eventId)
                .then(event => {
                    setEvent(event)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }

    }, [])

    const constructEventObject = () => {
        if (event.eventLocationCity === "") {
            window.alert("Please select a location")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (eventId) {
                //PUT - update
                updateEvent({
                    userId: parseInt(localStorage.getItem("user")),
                    id: event.id,
                    name: event.name,
                    eventLocationCity: event.eventLocationCity,
                    eventLocationState: event.eventLocationState,
                    eventLocationZip: event.eventLocationZip,
                    date: event.date
                })
                    .then(() => history.push(`/events/detail/${event.id}`))
            } else {
                //POST - add
                addEvent({
                    userId: parseInt(localStorage.getItem("user")),
                    name: event.name,
                    eventLocationCity: event.eventLocationCity,
                    eventLocationState: event.eventLocationState,
                    eventLocationZip: event.eventLocationZip,
                    date: event.date
                })
                    .then(() => history.push("/events"))
            }
        }
    }


    return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventName">Event Name: </label>
                    <input type="text" id="eventName" name="name" required autoFocus className="form-control"
                        placeholder="Event Name"
                        onChange={handleControlledInputChange}
                        defaultValue={event.name} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventCity">City: </label>
                    <input type="text" id="eventLocationCity" name="eventLocationCity" className="form-control"
                        placeholder="City"
                        onChange={handleControlledInputChange}
                        defaultValue={event.eventLocationCity} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventState">State: </label>
                    <input type="text" id="eventLocationState" name="eventLocationState" className="form-control"
                        placeholder="State"
                        onChange={handleControlledInputChange}
                        defaultValue={event.eventLocationState} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventZip">Zip: </label>
                    <input type="text" id="eventLocationZip" name="eventLocationZip" className="form-control"
                        placeholder="Zip"
                        onChange={handleControlledInputChange}
                        defaultValue={event.eventLocationZip} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventDate">Event Date: </label>
                    <input type="date" id="date" name="date" className="form-control"
                        onChange={handleControlledInputChange}
                        defaultValue={event.date} />
                </div>
            </fieldset>

            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructEventObject()
                }}>
                {eventId ? <>Save Event</> : <>Add Event</>}</button>
        </form>
    )
}