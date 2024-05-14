import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calander.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { Button, Drawer, Text } from "@medusajs/ui";

const localizer = momentLocalizer(moment);
const Wrapper = () => {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title",
    },
  ]);

  return (
    <div>
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "100vh" }}
        />
      </div>

      <Button>Button</Button>
      <Drawer>
        <Drawer.Trigger asChild>
          <Button>Edit Variant</Button>
        </Drawer.Trigger>
        <Drawer.Content className="contDrawer">
          <Drawer.Header>
            <Drawer.Title>Edit Variant</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body className="p-4">
            <Text>This is where you edit the variant&apos;s details</Text>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.Close asChild>
              <Button variant="secondary">Cancel</Button>
            </Drawer.Close>
            <Button>Save</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};

export default Wrapper;
