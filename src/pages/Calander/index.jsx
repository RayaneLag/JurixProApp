import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import classes from "./calander.module.css";

const localizer = momentLocalizer(moment);

const EventWrapper = ({ event, children }) => {
  const start = moment(event.start);
  const end = moment(event.end);
  const today = moment(children.props.style.left);

  if (start.isSame(today, "day")) {
    return <div className={classes.eventStart}>{event.title}</div>;
  }

  if (end.isSame(today, "day")) {
    return <div className={classes.eventEnd}>{event.title}</div>;
  }

  return <>{children}</>;
};

const PlannerPage = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const handleAddEvent = (e) => {
    e.preventDefault();
    setEvents([
      ...events,
      {
        ...newEvent,
        start: new Date(newEvent.start),
        end: new Date(newEvent.end),
      },
    ]);
    setNewEvent({ title: "", start: "", end: "" });
  };

  return (
    <div className={classes.container}>
      <div className={classes.calendarContainer}>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "100vh" }}
          components={{
            eventWrapper: EventWrapper,
          }}
        />
      </div>
      <div className={classes.formContainer}>
        <form onSubmit={handleAddEvent}>
          <h2 className={classes.formTitle}>Ajouter un nouvel evenement</h2>
          <div>
            <label>Titre</label>
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label>Début</label>
            <input
              type="datetime-local"
              value={newEvent.start}
              onChange={(e) =>
                setNewEvent({ ...newEvent, start: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label>Fin</label>
            <input
              type="datetime-local"
              value={newEvent.end}
              onChange={(e) =>
                setNewEvent({ ...newEvent, end: e.target.value })
              }
              required
            />
          </div>
          <button type="submit">Ajouter un nouvel evenement</button>
        </form>
      </div>
    </div>
  );
};

export default PlannerPage;
