import React, { useState } from "react";
import "./dashboard.css";
import ChatWeb from "../../components/Chatweb";
import Wrapper from "../../components/Calander";
import { Button, Drawer, Text } from "@medusajs/ui";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "First Note",
      description: "This is the first user's note description.",
    },
    {
      id: 2,
      title: "Second Note",
      description: "Here is the second note with more detailed information.",
    },
    {
      id: 3,
      title: "Third Note",
      description: "Short description for the third note.",
    },
  ]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (note) => {
    setEditId(note.id);
    setEditText(note.description);
  };

  const saveEdit = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, description: editText };
      }
      return note;
    });
    setNotes(updatedNotes);
    setEditId(null);
  };

  return (
    <div className="dashboard">
      <div className="flex-container">
        {" "}
        {/* Ensure this container uses flex display */}
        <aside className="sidebar">
          <div className="menu">
            <div className="menu-item">Posts</div>
            <div className="menu-item">Schedules</div>
            <div className="menu-item">Income</div>
            {user.name}
          </div>
        </aside>
        <section className="notes-list">
          {notes.map((note) => (
            <div
              key={note.id}
              className="note"
              onClick={() => handleEdit(note)}
            >
              <h1 className="note-title">{note.title}</h1>
              {editId === note.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={() => saveEdit(note.id)}
                  className="note-input"
                />
              ) : (
                <p className="note-description">{note.description}</p>
              )}
            </div>
          ))}
        </section>
      </div>
      <ChatWeb />
      {/* <Wrapper /> */}
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

export default Dashboard;
